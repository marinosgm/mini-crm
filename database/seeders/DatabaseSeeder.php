<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Client;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {   
        DB::table('users')->truncate();

        // Seed an admin user
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'), // Use bcrypt to hash the password
        ]);

        // Create 50 clients, each with 5 transactions
        Client::factory(50)->has(
            Transaction::factory(5) // Each client has 5 transactions
        )->create();
    }
}