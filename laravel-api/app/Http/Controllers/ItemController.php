<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use Gate;
use Illuminate\Support\Facades\Auth;
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
                'quantity' => 'required'
            ]);

//            $uploadFolder = 'items';
//            $image = $request->file('img');
//            $path = $image->store($uploadFolder, 'public');
//            $uploadedImage = ([
//                "image_name" => basename($path),
//                "image_url" => Storage::disk('public')->url($path),
//                "mime" => $image->getClientMimeType()
//            ]);

            $path = $request->file('img')->store('public/images');
            $filename = str_replace('public/', "", $path);


           $item = Item::create([
                'user_id' => Auth::id(),
                'category_id' => request('category_id'),
                'title'=>request('title'),
                'description' => request('description'),
                'keywords' =>request('keywords'),
               'img' => $filename,
               'price' => request('price'),
                'discount' => request('discount'),
                'quantity' => request('quantity'),
                'weight' => request('weight'),
                'size' => request('size')
            ]);

            return response()->json(['message' => 'Item added successfully', 'item'=>$item],200);

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
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Item $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        //
    }
}
