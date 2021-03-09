<?php

use App\Category;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'category_name' => 'books',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        Category::create([
            'category_name' => 'clothes',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        Category::create([
            'category_name' => 'garden tools',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
