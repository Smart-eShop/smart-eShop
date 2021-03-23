<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CartStorage extends Model
{
    protected $fillable = ['cart', 'price_before_taxes', 'taxes', 'total_price', 'total_quantity'];

    protected $casts = [
      'cart' => 'array'
    ];
}
