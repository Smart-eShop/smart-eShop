<?php

namespace App\Http\Controllers;

use App\Imports\ItemsImport;
use http\Env\Response;
use Illuminate\Http\Request;
use Excel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Gate;
use Illuminate\Support\Facades\Lang;

class ItemsImportController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');

    }

    public function import(Request $request)
    {
        if (Gate::allows('seller-role')) {
            $this->validate($request, [
                'file' => 'required|mimes:xls,xlsx'
            ]);
            $file = $request->file('file');

            Excel::import(new ItemsImport, $file);

            return response()->json(['message' => Lang::get('messages_en.added_excel')], 200);
        }
        return response()->json(['message' => Lang::get('messages_en.no_permission_item')], 200);
    }
}
