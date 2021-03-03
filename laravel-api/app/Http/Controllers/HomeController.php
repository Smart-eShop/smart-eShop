<?php

namespace App\Http\Controllers;

use App\Role;
use App\RoleUser;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index()
    {

        $role = RoleUser::where('role_id', '=', '1')->get('user_id');

        dd($role);
        return view('welcome');
    }
}
