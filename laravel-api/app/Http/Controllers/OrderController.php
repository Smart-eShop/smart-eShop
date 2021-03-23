<?php

namespace App\Http\Controllers;


use App\Cart;
use App\Order;
use App\Item;
use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Gate;


class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

//    public function updateUserAddress(Request $request, User $user){
//
//        $validate = Validator::make($request->all(),[
//            'street_number' => ['required', 'string'],
//            'city' => ['required', 'string'],
//            'postcode' => ['required']
//            ]);
//
//        if (auth()->id() == $user->id){
//        if ($validate->fails()) {
//            return response()->json(['error' => $validate->errors()]);
//        } else {
//            User::where('id', $user->id)->update($request->only('street_number', 'city', 'postcode'));
//            return response()->json(['message' => Lang::get('messages_lt.updated')], 200);
//        }
//    }
//        return response()->json(['message'=>Lang::get('messages_lt.not_allowed')],200);
//    }

// pasiziurejimui cia tik
    public function getAllOrdersTest()
    {

        $orders = Order::all();
//        $item = $orders->items()->get();
//        $users = User::all();
//        $user = $users->orders()->get();

        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $orders = Order::all();
        $invoicenumber = '';
        $order = new Order();
        if ($orders->isEmpty()) {
            $latestOrder = Order::orderBy('created_at', 'DESC')->first('id');
            $invoicenumber .= '#' . str_pad($latestOrder + 1, 8, "0", STR_PAD_LEFT);
        } else {
            $latestOrder = Order::orderBy('created_at', 'DESC')->first();
            $invoicenumber .= '#' . str_pad($latestOrder->id + 1, 8, "0", STR_PAD_LEFT);
        }
        $order->invoice_number = $invoicenumber;
        $order->user_id = Auth::id();
        $order->delivery_id = $request->input('delivery_id');
        $order->order_status_id = 1;
        $order->payment_id = $request->input('payment_id');
        $order->cart = $request->input('cart');
        $order->billing_first_name = $request->input('billing_first_name');
        $order->billing_last_name = $request->input('billing_last_name');
        $order->billing_email = $request->input('billing_email');
        $order->billing_street_number = $request->input('billing_street_number');
        $order->billing_city = $request->input('billing_city');
        $order->billing_postcode = $request->input('billing_postcode');
        $order->total_price_without_tax = $request->input('total_price_without_tax');
        $order->total_taxes = $request->input('total_taxes');
        $order->total_price = $request->input('total_price');
        $order->total_quantity = $request->input('total_quantity');
        Auth::user()->orders()->save($order);

        return response()->json(["order" => $order]);
    }

    //keiciam orderio statusa
    public function updateOrderStatus(Request $request, $id)
    {
        if (Gate::allows('seller-role')) {

            Order::find($id)->update($request->only(['order_status_id']));
            $order = Order::find($id);

            return response()->json(['message' => Lang::get('messages_lt.updated_order_status'), 'order' => $order]);
        }
        return response()->json(['message' => Lang::get('messages_lt.change_order_status')]);
    }


}
