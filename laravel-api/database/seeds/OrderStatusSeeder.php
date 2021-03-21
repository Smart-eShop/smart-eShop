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
            'status_name' => 'naujas',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'apmokėtas',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'užsakymas apdorojamas',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'išsiųstas',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        OrderStatus::create([
            'status_name' => 'užbaigtas',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

    }
}
