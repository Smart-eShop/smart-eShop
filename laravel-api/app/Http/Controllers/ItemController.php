<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use Gate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ItemController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');

    }

    public function createItem(Request $request)
    {
        if (Gate::allows('seller-role')) {
            $validation = $request->validate([
                'title' => ['required', 'min:5'],
                'description' => ['required', 'max:700'],
                'price' => ['required', 'regex:/^\d*(\.\d{2})?$/'],
                'discount' => 'integer|between:0,99.99',
                'quantity' => 'required',
                'img' => 'mimes:jpeg, jpg, png, gif|required|max:10000'
            ]);

//            $images = [];
//            foreach ($request->file('img') as $key=>$image) {
//                // $data_attribute = array('img'=>$image);
//                $path = $image->store('public/images');
//                // $image = \Storage::put('promotion_image', $file); // your image path
//                $filename = $image->getClientOriginalName();
//                $image = $image->move($path, $filename);
//                if($image){
//                    array_push($images, $image);
//                }
//            }
            $path = $request->file('img')->store('public/images');
            $filename = str_replace('public/', "", $path);

            $item = Item::create([
                'user_id' => Auth::id(),
                'category_id' => request('category_id'),
                'title' => request('title'),
                'description' => request('description'),
                'keywords' => request('keywords'),
                'img' => $filename,
                'price' => request('price'),
                'discount' => request('discount'),
                'quantity' => request('quantity'),
                'weight' => request('weight'),
                'size' => request('size')
            ]);

            return response()->json(['message' => 'Item added successfully', 'item' => $item], 200);

        }
        return response()->json(["message" => "You don't have permission to post an item!"], 200);


    }

    public function update(Request $request, Item $item)
    {
        if (Gate::denies('user-id', $item))
            return response()->json(["message" => "You don't have permission to update an item!"], 200);

//             DB::table('items')->where('id', $item->id)->update([
//            'category_id' => request('category_id'),
//            'title'=>request('title'),
//            'description' => request('description'),
//            'keywords' =>request('keywords'),
////               'img' => $uploadedImage,
//            'price' => request('price'),
//            'discount' => request('discount'),
//            'quantity' => request('quantity'),
//            'weight' => request('weight'),
//            'size' => request('size')
//        ]);
        Item::where('id', $item->id)->update($request->all());

        return response()->json(['message' => 'Item updated successfully'], 200);
    }

    public function delete(Item $item)
    {
        if (Gate::allows('user-id', $item)) {
            $item->delete();
            return response()->json(['message' => 'Item deleted successfully!'], 200);
        }
        return response()->json(['message' => "You don't have a permission to delete this item!"], 200);
    }
}
