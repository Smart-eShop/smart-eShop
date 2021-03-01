<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        {
            DB::table('users')->insert([
                'name' => 'Admin',
                'email' => 'admin@smarteshop.com',
                'first_name' => 'Admin',
                'last_name' => 'Admin',
                'password' => Hash::make('admin123'),
            ]);
        }

        $faker = Faker::create();
        foreach (range(1,7) as $index) {
            DB::table('users')->insert([
                'name' => $faker->userName,
                'email' => $faker->email,
                'first_name'=> $faker->firstName,
                'last_name'=> $faker->lastName,
                'address'=> $faker->address,
                'password' => bcrypt('secret'),
            ]);
        }
    }
}
