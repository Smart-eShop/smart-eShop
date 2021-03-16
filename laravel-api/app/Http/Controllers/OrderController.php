<?php

namespace App\Http\Controllers;


use App\Order;
use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Gate;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');

    }

    public function updateUserAddress(Request $request, User $user){

        $validate = Validator::make($request->all(),[
            'street_number' => ['required', 'string'],
            'city' => ['required', 'string'],
            'postcode' => ['required']
            ]);

        if (auth()->id() == $user->id){
        if ($validate->fails()) {
            return response()->json(['error' => $validate->errors()]);
        } else {
            User::where('id', $user->id)->update($request->only('street_number', 'city', 'postcode'));
            return response()->json(['message' => 'Address updated successfully!'], 200);
        }
    }
        return response()->json(['message'=>'You can only update your address!'],200);
    }
}
