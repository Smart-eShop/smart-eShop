<?php

namespace App\Http\Controllers;

use App\Imports\ItemsImport;
use http\Env\Response;
use Illuminate\Http\Request;
use Excel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Gate;

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

            return response()->json(['message' => 'Excel data imported successfully!'], 200);
        }
        return response()->json(['message' => "You don't have permission import Excel data!"], 200);
    }
}
