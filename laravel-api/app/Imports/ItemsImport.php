<?php

namespace App\Imports;

use App\Item;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ItemsImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    public function model(array $row)
    {
        return new Item([
            'user_id' => Auth::id(),
            'category_id' => $row['category_id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'keywords' => $row['keywords'],
            'img' => $row['img'],
            'price' => $row['price'],
            'discount' => $row['discount'],
            'quantity' => $row['quantity'],
            'weight' => $row['weight'],
            'size' => $row['size']
        ]);
    }
}
