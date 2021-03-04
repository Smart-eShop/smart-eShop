<?php

namespace App\Http\Controllers;

use App\Role;
use App\RoleUser;

use App\User;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Request $request)
    {
        $users = User::with('roles')->get();
        //dd(auth()->user());
        return view('welcome', compact('users'));

    }
}
