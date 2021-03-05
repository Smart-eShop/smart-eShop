<?php

namespace App\Http\Controllers;

use App\BanDeleteUser;
use App\Role;
use App\RoleUser;
use App\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;



class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['adminLogin']]);
    }

    public function adminLogin(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        $token = auth()->attempt($credentials);

        if (!$token) {
            return response()->json(['error' => 'Incorrect login data!']);
        } elseif (!auth()->user()->hasRole('Admin')) {
            return response()->json(['error' => "You don't have permission to login!"]);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $userRole = Role::where('role', '=', 'Admin')->get();

        return response()->json(['token' => $token, 'role' => 'Admin', 'userRole' => $userRole, 'access_token' => $accessToken]);
    }


    //roles pakeitimas
    public function updateRole(Request $request, $id)
    {
        if((!auth('api')->check()) || (!auth()->user()->hasRole('Admin'))){
            //Auth::user()->role->id==1
            return response()->json(["message" => "You don't have perrmision to change role!"]);
        }
        User::find($id)->roles()->sync([$request->role_id]);
        return response()->json(["message" => "Role changed successfully"], 200);
    }



    // userio baninimas ir trinimas
    public function banOrDelete(Request $request, $id)
    {
        if(Gate::denies('ban')){
            return response()->json(["message" => "You are not Admin"], 200);
        }
//        if(!($request->user()->hasRole('Admin')))
//                return response()->json(["message" => "You are not Admin"], 200);

        $bannedList = BanDeleteUser::where('is_banned', '=', 1)->get('user_id');

        if($request->input('is_banned') == 1){
            foreach ($bannedList as $bannedUser)
                if($bannedUser->user_id == $id) {
                    return response()->json(["message" => "User already banned"], 200);
                }
                         BanDeleteUser::create([
                        'user_id' => $id,
                        'is_banned' => $request->input('is_banned'),
                        'is_deleted' => 0
                    ]);
            return response()->json(["message" => "User banned successfully"], 200);

        } elseif ($request->input('is_deleted') == 1){
             DB::table('ban_delete_users')
                ->where('user_id', $id)
                ->update(['is_deleted' => 1]);

            // trinam viska kas susija su useriu
            // kas kart atnaujinti trinima, kai prisides dalyku nauju

            $role_user = RoleUser::where('user_id', $id);
            $role_user->delete();

            $users = User::all();
            $user = $users->find($id);
            $user->delete();

            return response()->json(["message" => "User deleted successfully"], 200);
        }

    }

}
