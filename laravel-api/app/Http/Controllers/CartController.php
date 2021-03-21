<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Item;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

//use Session;

class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => 'showCart', 'getAddToCart']);
    }

    public function add(Request $request, Item $item)
    {
//        dd(\Cart::session(auth()->id()));

        \Cart::session('_token');//auth()->id()
        $cart = \Cart::add(array(
            'id' => $item->id,
            'name' => $item->title,
            'price' => $item->price,
            'quantity' => 4,
            'attributes' => array(),
            'associatedModel' => $item
        ));
        return response()->json(["message" => $cart, 'name' => $item->title]);
    }

    public function showCart()
    {
        \Cart::session('_token');
        $cartItems = \Cart::getContent();
//        dd($cartItems);

        return response()->json($cartItems);
    }

    public function getAddToCart(Request $request, $id)
    {
        $item = Item::find($id);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $cart->add($item, $item->id);

        $request->session()->put('cart', $cart);
        return response()->json($cart);
    }

    public function getCart(Request $request)
    {
        if (!$request->session()->has('cart')) {
            return response()->json(["message" => "Krepšelis tuščias"]);
        }
        $oldCart = $request->session()->get('cart');
        $cart = new Cart($oldCart);

        return response()->json(["items" => $cart->items, "totalPrice" => $cart->totalPrice,
            "totalQty" => $cart->totalQty]);
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
}
