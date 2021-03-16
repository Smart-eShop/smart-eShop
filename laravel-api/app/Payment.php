<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = ['name', 'terms'];

    public function orders(){

        return $this->hasMany(Order::class);
    }
}
