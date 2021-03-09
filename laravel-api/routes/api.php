<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Auth
Route::post('register', 'UserController@registerUser');
Route::post('login', 'UserController@userLogin');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
//Admin login
Route::post('login/admin', 'AdminController@adminLogin');
//Admin functions
Route::post('updateRole/user_id={user_id}', 'AdminController@updateRole'); //Prideti role useriui
// perziureti uri, ar gerai taip ar kitaip isdelioti?
Route::post('unban/user_id={user_id}', 'AdminController@unban');
Route::post('ban/user_id={user_id}', 'AdminController@banUser');
Route::post('delete/user_id={user_id}', 'AdminController@deleteUser');

//Seller functions
Route::post('addItem', 'ItemController@createItem');
Route::delete('item/delete/{item}', 'ItemController@delete');


//Api get
Route::get('users','ApiController@getUsers');
Route::get('item/{item}', 'ApiController@showFullItem');
Route::get('items', 'ApiController@getAllItems');


//Delivery methods
Route::post('delivery/store', 'DeliveryController@store');
Route::get('delivery/show', 'DeliveryController@show');
Route::get('delivery/edit/{delivery}', 'DeliveryController@edit');
Route::patch('delivery/update/{delivery}', 'DeliveryController@update');
Route::get('delivery/delete/{delivery}', 'DeliveryController@destroy');

Route::get('recaptcha', 'ApiController@recaptchaKey');




