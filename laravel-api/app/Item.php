<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['user_id', 'category_id', 'title', 'description', 'keywords', 'img', 'price', 'discount',
        'quantity', 'weight', 'size'];

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
