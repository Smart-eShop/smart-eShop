<?php

namespace App\Http\Controllers;

use App\Category;
use App\Item;
use App\Order;
use App\User;
use Illuminate\Http\Request;
use Gate;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['showFullItem', 'getAllItems', 'recaptchaKey', 'showAllCategories']]);
    }

    public function getUsers()
    {
        if (Gate::allows('admin-role')) {
            $data = DB::table('users')
                ->leftJoin('role_users', 'users.id', '=', 'role_users.user_id')
                ->leftJoin('roles', 'role_users.role_id', '=', 'roles.id')
                ->leftJoin('ban_delete_users', 'ban_delete_users.user_id', '=', 'users.id')
                ->select('users.id', 'users.name', 'users.email', 'users.first_name', 'users.last_name', 'users.created_at', 'roles.role', 'ban_delete_users.is_banned')
                ->where('roles.role', '!=', 'Admin')
                ->orderBy('users.id')
                ->get();

            return response()->json(['users' => $data], 200);
        }

        return response()->json(["error" => 404, "message" => 'Not found!'], 404);

    }

    public function showFullItem(Item $item)
    {
        return response()->json(['item' => $item], 200);
    }

    public function getAllItems()
    {

        $data = DB::table('items')
            ->join('users', 'users.id', '=', 'items.user_id')
            ->join('categories', 'categories.id', '=', 'items.category_id')
            ->select('items.*', 'users.name as user_username', 'categories.category_name')
            ->get();

        $data = Item::with('category:id,category_name', 'user:id,name')->get();
        return response()->json(['items' => $data], 200);

    }

    public function recaptchaKey()
    {

        $secret = env('GOOGLE_RECAPTCHA_SECRET');
        $site = env('GOOGLE_RECAPTCHA_KEY');

        return response()->json(['GOOGLE_RECAPTCHA_SECRET' => $secret, 'GOOGLE_RECAPTCHA_KEY' => $site], 200);
    }

    public function showAllCategories()
    {
        $categories = Category::all();
        return response()->json(['Categories' => $categories], 200);
    }

    public function showOneOrder(Order $order)
    {
        if (Gate::allows('user-id', $order) || Gate::allows('order-user-id', $order)) {
            return response()->json(['order' => $order], 200);
        }
        return response()->json(['message' => "You don't have permission to see other's orders"]);
    }

}
