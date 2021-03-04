<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function getUsers()
    {
        $data = DB::table('users')
            ->leftJoin('role_users', 'users.id', '=', 'role_users.user_id')
            ->leftJoin('roles', 'role_users.role_id', '=', 'roles.id')
            ->select('users.id', 'users.name', 'users.email', 'users.first_name', 'users.last_name', 'users.created_at', 'roles.role')
            ->where('roles.role', '!=', 'Admin')
            ->orderBy('users.id')
            ->get();

        return response()->json(['users' => $data], 200);
    }
}