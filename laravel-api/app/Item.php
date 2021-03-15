<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['user_id', 'category_id', 'title', 'description', 'keywords', 'img', 'price', 'discount',
        'quantity', 'weight', 'size'];

    protected $casts = [
        'img' => 'array',
        'keywords' => 'array'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }
}
