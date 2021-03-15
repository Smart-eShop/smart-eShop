<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    protected $fillable = ['name', 'time', 'price', 'terms'];

    public function orders(){

        return $this->hasMany(Order::class);

    }
}
