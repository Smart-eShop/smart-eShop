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
        if (Gate::allows('admin-role')) {
            $validation = $request->validate([
                'title' => ['required', 'min:5'],
                'description' => ['required', 'max:700'],
                'price' => ['required', 'regex:/^\d*(\.\d{2})?$/'],
                'discount' => 'integer|between:0,99.99',
                'quantity' => 'required',
                'img' => 'mimes:jpeg, jpg, png, gif|required|max:10000'
            ]);

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

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Item $item
     * @return \Illuminate\Http\Response
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Item $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Item $item
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Item $item)
    {
        if(Gate::denies('admin-role'))
            return response()->json(["message" => "You don't have permission to post an item!"], 200);

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

        return response()->json(['message' => 'Item updated successfully'],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Item $item
     * @return \Illuminate\Http\Response
     */
    public function delete(Item $item)
    {
        if (Gate::allows('deleteItem', $item)) {
            $item->delete();
            return response()->json(['message' => 'Item deleted successfully!'], 200);
        }
        return response()->json(['message' => "You don't have a permission to delete this item!"], 200);
    }
}
