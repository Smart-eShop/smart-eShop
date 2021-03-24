<?php

namespace App\Http\Controllers;

use App\BanDeleteUser;
use App\ItemOrder;
use App\Order;
use App\Role;
use App\RoleUser;

use App\User;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Request $request, $id=1)
    {
//        $users = User::all();
//
////dd(Order::find(1)->items()->get());
//        dd($users->orders()->get());


        return view('welcome');

    }
}
