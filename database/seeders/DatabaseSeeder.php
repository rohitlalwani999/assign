<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\product;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Rohit Lalwani',
            'email' => 'rohit@5exceptions.com',
            'password' => Hash::make('12345')
        ]);
        // factory(product::class, 20)->create();
        // \App\Models\User::factory(10)->create();
    }
}
