<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Gate;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function createCategory(Request $request)
    {

        $validation = Validator::make($request->all(),[
            'category_name' => ['required', 'string', 'unique:categories']
        ]);

        if (Gate::denies('admin-role')){
            return response()->json(['message'=> Lang::get('messages_en.not_admin')]);
        } elseif ($validation->fails()){
            return response()->json(["error" => $validation->errors()]);
        }

        $category = Category::create([
            'category_name' => $request->category_name
        ]);

        return response()->json(['message'=>Lang::get('messages_en.added'), 'category'=>$category],200);
    }

    public function deleteCategory($id)
    {
        if (Gate::denies('admin-role')) {
            return response()->json(['message' => Lang::get('messages_en.not_admin')]);
        }
        $category = Category::find($id);
        $category->delete();

        return response()->json(["message" => Lang::get('messages_en.deleted')], 200);
    }
}
