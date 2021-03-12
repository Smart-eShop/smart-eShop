<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use Gate;
use File;
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
                'img' => 'required|max:10000'
            ]);

            $key = $request['keywords'];
            $keywords = explode(",", $key);

            $images =array();
            if ($request->hasFile('img')){
                $photos = $request->file('img');
                foreach ($photos as $photo){
                    array_push($images,
                        $photo->getClientOriginalName()
                    );
                    //$photo->store('public/images');
                    $photo->move(public_path('public/images'), $photo->getClientOriginalName());
                }
            }
            //$imagess = json_encode($images);

            $item = Item::create([
                'user_id' => Auth::id(),
                'category_id' => request('category_id'),
                'title' => request('title'),
                'description' => request('description'),
                'keywords' => $keywords,
                 'img' => $images,
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

        $key = $request['keywords'];
        $keywords = explode(",", $key);

        if ($request->file()) {
            $images = array();
            if ($request->hasFile('img')) {
                $photos = $request->file('img');
                foreach ($photos as $photo) {
                    array_push($images,
                        $photo->getClientOriginalName()
                    );
                    //$photo->store('public/images');
                    $photo->move(public_path('public/images'), $photo->getClientOriginalName());
                }
            }
            //$images = json_encode($photoInfo);
            Item::where('id', $item->id)->update(['img'=>$images, 'keywords'=>$keywords]);
        }

        Item::where('id', $item->id)->update($request->only(['category_id', 'title', 'description', 'price', 'discount', 'quantity', 'weight', 'size']));


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
