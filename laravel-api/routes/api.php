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
Route::post('item/update/{item}', 'ItemController@update');
Route::delete('item/delete/{item}', 'ItemController@delete');
Route::post('import/items', 'ItemsImportController@createItems');


//Api get
Route::get('users','ApiController@getUsers');
Route::get('item/{item}', 'ApiController@showFullItem');
Route::get('items', 'ApiController@getAllItems');

Route::get('recaptcha', 'ApiController@recaptchaKey');

Route::get('categories', 'ApiController@showAllCategories');


//Delivery methods
Route::post('delivery/store', 'DeliveryController@store');
Route::get('delivery/show', 'DeliveryController@show');
Route::get('delivery/edit/{delivery}', 'DeliveryController@edit');
Route::patch('delivery/update/{delivery}', 'DeliveryController@update');
Route::get('delivery/delete/{delivery}', 'DeliveryController@destroy');
//Payment methods
Route::post('payment/store', 'PaymentController@store');
Route::post('payment/update/{payment}', 'PaymentController@update');
Route::get('payment/delete/{payment}', 'PaymentController@destroy');


Route::get('recaptcha', 'ApiController@recaptchaKey');
Route::post('import_excel/import', 'ItemsImportController@import');


//Category
Route::post('create-category', 'CategoryController@createCategory');
Route::post('delete-category/category={category}', 'CategoryController@deleteCategory');


Route::post('update-address/{user}', 'OrderController@updateUserAddress');

//Orders
Route::post('order/store', 'OrderController@store');
Route::get('orders', 'OrderController@getAllOrdersTest');
Route::get('order/{order}', 'ApiController@showOneOrder');
Route::post('order/update-order-status/{order}', 'OrderController@updateOrderStatus');



