<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id', 'item_id', 'delivery_id', 'order_status_id', 'payment_id'];

    protected $casts = [
        'item_id' => 'array',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function items(){
        return $this->belongsToMany(Item::class, 'item_orders',  'order_id','item_id')
            ->withTimestamps();
    }

    public function delivery(){
        return $this->belongsTo(Delivery::class);
    }

    public function orderStatus(){
        return $this->belongsTo(OrderStatus::class);
    }

    public function payment(){
        return $this->belongsTo(Payment::class);
    }
}
