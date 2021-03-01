<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return User
     */
    public function run()
    {
        {
            $admin= new User ([
                'name' => 'Admin',
                'email' => 'admin@smarteshop.com',
                'first_name' => 'Admin',
                'last_name' => 'Admin',
                'password' => Hash::make('admin123'),
            ]);
            $admin->save();
            $role = Role::where('role', '=', 'Admin')->get('id');
            $admin->roles()->sync(1,false);

        }

        $faker = Faker::create();
        foreach (range(1,7) as $index) {
            $fakers = new User([
                'name' => $faker->userName,
                'email' => $faker->email,
                'first_name'=> $faker->firstName,
                'last_name'=> $faker->lastName,
                'address'=> $faker->address,
                'password' => bcrypt('secret'),
            ]);
            $fakers->save();
            $fakers->roles()->attach(3);
        }
    }
}

