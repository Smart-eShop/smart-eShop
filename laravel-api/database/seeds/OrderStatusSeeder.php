<?php

use App\OrderStatus;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OrderStatus::create([
            'status_name' => 'new',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'paid',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'order in progress',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'sent',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'done',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

    }
}
