<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */


    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('invoice_number');
            $table->foreignId('user_id')->constrained();
            $table->integer('total_item');
            $table->foreignId('delivery_id')->constrained();
            $table->foreignId('order_status_id')->constrained();
            $table->foreignId('payment_id')->constrained();
            $table->string('billing_first_name');
            $table->string('billing_last_name');
            $table->string('billing_email');
            $table->string('billing_street_number');
            $table->string('billing_city');
            $table->string('billing_postcode');
            $table->double('total_price_without_tax',10,2);
            $table->double('total_taxes',10,2);
            $table->double('total_price', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
