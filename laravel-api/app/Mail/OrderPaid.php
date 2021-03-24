<?php

namespace App\Mail;

use App\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderPaid extends Mailable
{
    use Queueable, SerializesModels;

    public $order;
    public $cart;
    public $payments;
    public $deliveries;

    /**
     * Create a new message instance.
     *
     * @param Order $order
     */
    public function __construct($orderArray, $cart, $payments, $deliveries)
    {
        $this->order = $orderArray;
        $this->cart = $cart;
        $this->payments = $payments;
        $this->deliveries = $deliveries;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): OrderPaid
    {
        return $this->view('mail.order.test');
    }
}
