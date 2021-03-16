<?php

namespace App\Http\Controllers;

use App\Delivery;
use Illuminate\Http\Request;
use Gate;
use Illuminate\Support\Facades\Lang;

class DeliveryController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');

    }

    public function store(Request $request)
    {

        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_en.not_admin')], 200);

        $validateData = $request->validate([
            'name' => 'required',
            'time' => 'required',
            'price' => 'required',
            'terms' => 'required'
        ]);
        Delivery::create([
            'name' => request('name'),
            'time' => request('time'),
            'price' => request('price'),
            'terms' => request('terms')
        ]);

        return response()->json(["message" => Lang::get('messages_en.added')]);
    }

    public function show(Delivery $delivery)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_en.not_admin')], 200);

        $delivery = Delivery::all();
        return response()->json(["Delivery" => $delivery]);
    }

    public function edit(Delivery $delivery)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_en.not_admin')], 200);

        return response()->json(["Delivery" => $delivery]);
    }

    public function update(Request $request, Delivery $delivery)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_en.not_admin')], 200);

        Delivery::where('id', $delivery->id)->update($request->all());
        return response()->json(["message" => Lang::get('messages_en.updated')]);
    }

    public function destroy(Delivery $delivery)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_en.not_admin')], 200);

        $delivery->delete();
        return response()->json(["message" => Lang::get('messages_en.deleted')]);
    }
}
