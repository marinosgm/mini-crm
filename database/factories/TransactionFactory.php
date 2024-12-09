<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    protected $model = \App\Models\Transaction::class;

    public function definition()
    {
        return [
            'client_id' => \App\Models\Client::factory(), // Links to a Client
            'transaction_date' => $this->faker->date,
            'amount' => $this->faker->randomFloat(2, 10, 1000), // Random amount between 10 and 1000
        ];
    }
}
