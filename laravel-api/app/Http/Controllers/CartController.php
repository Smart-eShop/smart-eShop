<?php

namespace App\Http\Controllers;

use App\Cart;
use App\CartStorage;
use App\Item;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class CartController extends Controller
{

//    public function __construct()
//    {
//        $this->middleware('auth:api', ['except' => 'getCart', 'getAddToCart']);
//    }

    public function getAddToCart(Request $request, $id)
    {
        $item = Item::find($id);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->add($item, $item->id);

        $request->session()->put('cart', $cart);
        $id = session()->getId();
        return response()->json([$cart, 'session_id' => $id]);
    }

    public function getCart(Request $request)
    {
        if (!$request->session()->has('cart')) {
            return response()->json(["message" => "Krepšelis tuščias"]);
        }
        $oldCart = $request->session()->get('cart');
        $cart = new Cart($oldCart);

        $id = session()->getId();

        return response()->json(["items" => $cart->items, "totalPrice" => $cart->totalPrice,
            "totalQty" => $cart->totalQty, 'session_id' => $id]);
    }

    public function removeProductsFromCart($id)
    {
        $cart = Session::get('cart');
        $item = Item::find($id);
        $cart->remove($item, $item->id);

        unset($cart->items[$id]);
        Session::put('cart', $cart);

        return response()->json(['message' => 'Item Removed From Cart!']);
    }

    public function store(Request $request)
    {
        $key = $request['cart'];
        $cartItems = explode(",", $key);

        $cart = CartStorage::create([
            'cart' => $cartItems,
            'price_before_taxes' =>$request->input('price_before_taxes'),
            'taxes' => $request->input('taxes'),
            'total_price' => $request->input('total_price'),
            'total_quantity' => $request->input('total_quantity')
        ]);
        return response()->json(["cart" => $cart]);
    }
     public function showCart(){

     }
}
