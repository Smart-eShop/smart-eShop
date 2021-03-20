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

//dd(Order::find(1)->items()->get());


        return view('welcome');

    }
}
