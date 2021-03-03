<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\DB;

class AdminController extends Controller
{
    public function adminLogin(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        $token = auth()->attempt($credentials);

        if(!$token = auth()->attempt($credentials)){
            return response()->json(['error' => 'duomenys netesingi']);
        }elseif (auth()->user()->email != 'admin@smarteshop.com'){
            return response()->json(['error' => 'Tu neturi admino teisiu']);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $userRole = Role::where('role', '=', 'Admin')->get();

        return response()->json(['token' => $token, 'role' => 'Admin', 'userRole' => $userRole, 'access_token'=> $accessToken]);
    }


    //roles pakeitimas // neveikia  plius route irgi blogas
    public function updateRole(Request $request, $role_id)
    {
        // patikrinti ar adminas prisijunges
        //patikrinti ar adminas yra adminas
        $user = User::select('*')->where('email',$request->input('email'))->first();
        $userId = $user->id;

        $hasRole = DB::table('role_users')
            ->select('role_id')
            ->join('roles', 'role_users.role_id', 'roles.id')
            ->where('role_users.user_id', $userId)
            ->get();

        $roles = [];
        foreach($hasRole as $role) {

            $roles[] = $role->role_id;
        }
        //
        if($role_id != 1) {
            User::where('id',$userId)->update(['role'=>$role_id]);
        }
        $role = Role::where('id', $role_id)->first();
        $role->users()->attach($userId);

        return response()->json(["message" => "Role sekmingai pakeista ",200]);

    }
}
