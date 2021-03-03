<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function adminLogin(Request $request)
    {
        $credentials = $request->only(['email', 'password']);
        $token = auth()->attempt($credentials);

        if(!$token = auth()->attempt($credentials)){
            return response()->json(['error' => 'duomenys netesingi']);
        }

        $userId = auth()->user()->id;
        // reikttu role priskirti kai useri kuriame, tada galetume patikrinti ar adminas turi sita role
        $role = Role::all();
        $x = User::with('roles')->get();

        return response()->json(['token' => $token, 'role' => 'Admin', 'Userio-id' => $userId, 'roles' => $role,'x' => $x]);
    }

    //roles pakeitimas
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

        return response()->json(["message" => "Role sekmingai prideta ",200]);

    }
}
