<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    protected $model = \App\Models\Client::class;

    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'avatar' => $this->generateAvatar(), // Custom avatar generator
            'email' => $this->faker->unique()->safeEmail,
        ];
    }

    private function generateAvatar()
    {
        // Use Faker's imageUrl to generate a random image URL
        $imageUrl = $this->faker->imageUrl(100, 100, 'people', true, 'Faker');

        // Define a unique file name for the image
        $fileName = 'avatars/' . $this->faker->unique()->uuid . '.jpg';

        try {
            // Fetch the image content from the URL
            $imageContent = file_get_contents($imageUrl);

            // Save the image to the 'public/avatars' directory
            Storage::disk('public')->put($fileName, $imageContent);

            return $fileName; // Return the file name for storing in the database
        } catch (\Exception $e) {
            // Fallback if image fetching fails
            return 'avatars/default-avatar.jpg'; // Ensure you have a default avatar in place
        }
    }
}