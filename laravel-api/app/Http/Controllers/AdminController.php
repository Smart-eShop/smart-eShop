<?php

namespace App\Http\Controllers;

use App\BanDeleteUser;
use App\Role;
use App\RoleUser;
use App\User;
use Gate;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


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
        if (Gate::allows('admin-role')) {
            User::find($id)->roles()->sync([$request->role_id]);
            return response()->json(["message" => "Role changed successfully"], 200);
        }

        return response()->json(["message" => "You don't have perrmision to change role!"]);

    }

    // userio baninimas ir trinimas

    public function banUser(Request $request, $id)
    {
     if (Gate::allows('admin-role')) {
            $bannedList = BanDeleteUser::where('is_banned', '=', 1)->get('user_id');

            if ($request->input('is_banned') == 1) {
                foreach ($bannedList as $bannedUser)
                    if ($bannedUser->user_id == $id) {
                        return response()->json(["message" => "User already banned"], 200);
                    }
            }

            BanDeleteUser::create([
                'user_id' => $id,
                'is_banned' => $request->is_banned
            ]);
            return response()->json(["message" => "User banned successfully"], 200);

        }

    }

    
       


    public function unban(Request $request, $id)
    {
        if(Gate::denies('admin-role')){
            return response()->json(["message" => "You are not Admin"], 200);
        }

        $user = BanDeleteUser::where('user_id', $id);
        $user->delete();

        return response()->json(["message" => "User unbanned successfully"], 200);
    }

    
    public function deleteUser(Request $request, $id)
    {
        if (Gate::allows('admin-role')) {
            $bannedList = BanDeleteUser::where('is_banned', '=', 1)->get('user_id');
            foreach ($bannedList as $bannedUser)
                if ($bannedUser->user_id == $id) {
                    $role_user = RoleUser::where('user_id', $id);
                    $role_user->delete();

                    $users = User::all();
                    $user = $users->find($id);
                    $user->delete();
                    return response()->json(["message" => "User deleted successfully"], 200);

                }
            return response()->json(["message" => "You can't delete unbanned user"], 200);

        }
    }

}




