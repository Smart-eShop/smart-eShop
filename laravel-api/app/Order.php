<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Order extends Model
{
    protected $fillable = [
        'invoice_number',
        'user_id',
        'delivery_id',
        'order_status_id',
        'payment_id',
        'cart',
        'billing_first_name',
        'billing_last_name',
        'billing_email',
        'billing_street_number',
        'billing_city',
        'billing_postcode',
        'total_price_without_tax',
        'total_taxes',
        'total_price',
        'total_quantity'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function items(){
        return $this->belongsToMany(Item::class, 'item_orders',  'order_id','item_id')
            ->withPivot(['quantity'])->withTimestamps();
    }

    public function delivery(){
        return $this->belongsTo(Delivery::class);
    }

    public function payment(){
        return $this->belongsTo(Payment::class);
    }

    public function orderStatus(){
        return $this->belongsTo(OrderStatus::class);
    }
}
