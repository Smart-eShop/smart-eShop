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
Route::post('ban/delete/user_id={user_id}', 'AdminController@banOrDelete');

//Api get
Route::get('users','ApiController@getUsers');





