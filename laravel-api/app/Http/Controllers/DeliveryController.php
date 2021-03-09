<?php

namespace App\Http\Controllers;

use App\Delivery;
use Illuminate\Http\Request;
use Gate;

class DeliveryController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if (Gate::denies('admin-role')) {
            return response()->json(["message" => "You are not Admin"], 200);
        }
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

        return response()->json(["message" => "Delivery method added to database successfully"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Delivery $delivery)
    {
        if (Gate::denies('admin-role')) {
            return response()->json(["message" => "You are not Admin"], 200);
        }
        $delivery = Delivery::all();
        return response()->json(["Delivery" => $delivery]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Delivery $delivery)
    {
        if (Gate::denies('admin-role')) {
            return response()->json(["message" => "You are not Admin"], 200);
        }
        return response()->json(["Delivery" => $delivery]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Delivery $delivery)
    {
        if (Gate::denies('admin-role')) {
            return response()->json(["message" => "You are not Admin"], 200);
        }
        Delivery::where('id', $delivery->id)->update($request->all());
        return response()->json(["message" => "Delivery method updated successfully"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Delivery $delivery)
    {
        if (Gate::denies('admin-role')) {
            return response()->json(["message" => "You are not Admin"], 200);
        }
        $delivery->delete();
        return response()->json(["message" => "Delivery method deleted successfully"]);
    }
}
