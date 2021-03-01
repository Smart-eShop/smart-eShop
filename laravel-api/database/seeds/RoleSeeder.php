<?php

use App\Role;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    Role::create([
        'role' => 'Admin',
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now()
    ]);
    Role::create([
        'role' => 'Seller',
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now()
    ]);
    Role::create([
        'role' => 'Buyer',
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now()
    ]);
}
}
