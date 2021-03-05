<?php

namespace App\Http\Controllers;

use App\BanDeleteUser;
use App\Role;
use App\RoleUser;

use App\User;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Request $request)
    {
        $users = User::with('roles')->get();
        $bannedUser = BanDeleteUser::all();
dd($bannedUser);

        return view('welcome', compact('users'));

    }
}
