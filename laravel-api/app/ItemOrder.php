<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemOrder extends Model
{
    protected $fillable =[
        'item_id',
        'order_id',
        'quantity'
    ];
}
