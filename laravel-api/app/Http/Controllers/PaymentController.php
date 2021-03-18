<?php

namespace App\Http\Controllers;

use App\Payment;
use Illuminate\Http\Request;
use Gate;
use Illuminate\Support\Facades\Lang;

class PaymentController extends Controller
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
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_lt.not_admin')], 200);

        $validateData = $request->validate([
            'name' => 'required',
            'terms' => 'required'
        ]);
        Payment::create([
            'name' => request('name'),
            'terms' => request('terms')
        ]);
        return response()->json(["message" => Lang::get('messages_lt.added')]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Payment $payment)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_lt.not_admin')], 200);

        Payment::where('id', $payment->id)->update($request->all());
        return response()->json(["message" => Lang::get('messages_lt.updated')]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Payment $payment)
    {
        if (Gate::denies('admin-role'))
            return response()->json(["message" => Lang::get('messages_lt.not_admin')], 200);

        $payment->delete();
        return response()->json(["message" => Lang::get('messages_lt.deleted')]);

    }
}
