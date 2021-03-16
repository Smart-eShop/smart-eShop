<?php

namespace App\Http\Controllers;

use App\Item;
use App\Order;
use http\Env\Response;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => 'getAllOrdersTest']);
    }

    public function createOrder(Request $request)
    {
        $orderValidation = $request->validate([
            'item_id' => 'required',
            'delivery_id' => 'required',
            'payment_id' => 'required'
        ]);

        $itemsId = $request['item_id'];
        $itemsArray = array_map('intval', explode(',', $itemsId));

        $order = Order::create([
            'user_id' => Auth::id(),
            'item_id' => $itemsArray,
            'delivery_id' => request('delivery_id'),
            'order_status_id' => 1,
            'payment_id' => request('payment_id')
        ]);

        return response()->json(['message' => 'Order successfully created', 'order' => $order], 200);

    }

    public function updateOrderStatus(Request $request, Order $order, Item $item)
    {
        if (Gate::allows('user-id', $item)) {

            Order::where('id', $order->id)->update($request->only(['order_status_id']));

            return response()->json(['order' => $order, 'message' => 'Order status successfully updated!']);
        }
        return response()->json(['message' => "You don't have permission to update this order status!"]);
    }

// pasiziurejimui cia tik
    public function getAllOrdersTest()
    {
        $orders = Order::all();

        return response()->json($orders);
    }

}
