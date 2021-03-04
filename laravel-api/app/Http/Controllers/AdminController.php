<?php

namespace App\Http\Controllers;

use App\Role;
use App\RoleUser;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\DB;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
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
}
