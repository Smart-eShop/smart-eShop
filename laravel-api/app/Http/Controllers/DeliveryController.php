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
        $this->middleware('auth:api', ['except' => 'show']);

    }

    public function store(Request $request)
    {

        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_lt.not_admin')], 200);

        $validateData = $request->validate([
            'name' => 'required',
            'time' => 'required',
            'price' => ['required', 'regex:/^\d*(\.\d{2})?$/'],
            'terms' => 'required'
        ]);
        Delivery::create([
            'name' => request('name'),
            'time' => request('time'),
            'price' => request('price'),
            'terms' => request('terms')
        ]);

        return response()->json(["message" => Lang::get('messages_lt.added')]);
    }

    public function show(Delivery $delivery)
    {
        $delivery = Delivery::all();
        return response()->json(["Delivery" => $delivery]);
    }

    public function edit(Delivery $delivery)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_lt.not_admin')], 200);

        return response()->json(["Delivery" => $delivery]);
    }

    public function update(Request $request, Delivery $delivery)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_lt.not_admin')], 200);

        Delivery::where('id', $delivery->id)->update($request->all());
        return response()->json(["message" => Lang::get('messages_lt.updated')]);
    }

    public function destroy(Delivery $delivery)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_lt.not_admin')], 200);

        $delivery->delete();
        return response()->json(["message" => Lang::get('messages_lt.deleted')]);
    }
}
