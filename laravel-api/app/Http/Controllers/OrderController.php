<?php

namespace App\Http\Controllers;



use App\Cart;
use App\Order;
use App\Item;
use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        if (Gate::allows('seller-role')){
        $orders = Order::all();
//        $item = $orders->items()->get();
//        $users = User::all();
//        $user = $users->orders()->get();
        $en = '';
        foreach ($orders as $order)
           $en = $order->cart;

        return response()->json(['orders'=>$orders, "en"=>  json_decode($en)]);
         }
        return response()->json(["message" => Lang::get('messages_lt.no_permission_item')], 200);
    }
    public function showOrders(Request $request)
    {
        $id = Auth::id();
       $orders = DB::table('orders')
           ->leftJoin('deliveries', 'orders.delivery_id', '=', 'deliveries.id')
           ->leftJoin('payments', 'orders.payment_id', '=', 'deliveries.id')
           ->where('user_id', $id)
           ->select('orders.*', 'payments.name as payment_type', 'deliveries.name as delivery_type')->get();

       $cart = [];
       $enCart = [];
       foreach ($orders as $order){
//           array_push($cart, $order->cart);
           $cart = $order->cart;
       }
       $enCart = json_decode($cart);

       return response()->json(["orders" => $orders, "cart" =>$enCart]);

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
        $orders = Order::all();
        $invoicenumber = '';
        $order = new Order();
        if($orders->isEmpty()){
            $latestOrder = Order::orderBy('created_at','DESC')->first('id');
            $invoicenumber = str_pad($latestOrder + 1, 8, "0", STR_PAD_LEFT);
        } else {
            $latestOrder = Order::orderBy('created_at','DESC')->first();
            $invoicenumber = str_pad($latestOrder->id + 1, 8, "0", STR_PAD_LEFT);
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




}
