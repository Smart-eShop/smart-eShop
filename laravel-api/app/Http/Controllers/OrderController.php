<?php

namespace App\Http\Controllers;



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
         $this->middleware('auth:api', ['except' => 'getAllOrdersTest', 'store']);
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
    public function getAllOrdersTest(Order $order)
    {
//        $orders = Order::all();
//        $item = $orders->items()->get();
//        $users = User::all();
//        $user = $users->orders()->get();

        return response()->json($order);
    }

    //bandom sukurti orderi
    public function store(Request $request){
        $order = Order::create($request->all());

//        $item = $request->input('item_id');
//        $qty = $request->input('qty');

                $order->items()->sync($request->input('item_id'), $order->id, $request->input('quantity'));

        return response()->json(["message" => 'Order successfully created', 'order' => $order], 200);
    }


}
