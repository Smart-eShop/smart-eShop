<?php

namespace App\Http\Controllers;



use App\Cart;
use App\Order;
use App\Item;
use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Gate;


class OrderController extends Controller
{
    public function __construct()
    {
         $this->middleware('auth:api', ['except' => 'getAllOrdersTest']);
    }

    public function updateUserAddress(Request $request, User $user){

        $validate = Validator::make($request->all(),[
            'street_number' => ['required', 'string'],
            'city' => ['required', 'string'],
            'postcode' => ['required']
            ]);

        if (auth()->id() == $user->id){
        if ($validate->fails()) {
            return response()->json(['error' => $validate->errors()]);
        } else {
            User::where('id', $user->id)->update($request->only('street_number', 'city', 'postcode'));
            return response()->json(['message' => 'Address updated successfully!'], 200);
        }
    }
        return response()->json(['message'=>'You can only update your address!'],200);
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
//        $item = $orders->items()->get();
//        $users = User::all();
//        $user = $users->orders()->get();

        return response()->json($orders);
    }

    //bandom sukurti orderi
//    public function store(Request $request){
//        $order = Order::create($request->all());
//
////        $item = $request->input('item_id');
////        $qty = $request->input('qty');
//
//                $order->items()->sync($request->input('item_id'), $order->id, $request->input('quantity'));
//
//        return response()->json(["message" => 'Order successfully created', 'order' => $order], 200);
//    }

//kuriam orderi su cart is seesion
    public function store(Request $request)
    {
//        $oldCart = $request->session()->get('cart');
//        $cart = new Cart($oldCart);
//        $beforeTaxesPrice = ($cart->totalPrice*79)/100;
//        $taxes = ($cart->totalPrice*21)/100;
        $order = new Order();

        $latestOrder = Order::orderBy('created_at','DESC')->first('id');

        $order->invoice_number = str_pad($latestOrder + 1, 8, "0", STR_PAD_LEFT);
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




}
