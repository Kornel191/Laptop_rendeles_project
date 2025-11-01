<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LaptopSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('laptops')->insert([
            [
                'brand' => 'Dell',
                'model' => 'Inspiron 15',
                'price' => 320000,
                'stock' => 10,
                'image' => 'https://m.media-amazon.com/images/I/71mFv5kZ3eL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'HP',
                'model' => 'Pavilion 14',
                'price' => 280000,
                'stock' => 8,
                'image' => 'https://m.media-amazon.com/images/I/71pV9rF+oEL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'Lenovo',
                'model' => 'IdeaPad 3',
                'price' => 250000,
                'stock' => 12,
                'image' => 'https://m.media-amazon.com/images/I/71V1IuQx8JL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'Apple',
                'model' => 'MacBook Air M2',
                'price' => 620000,
                'stock' => 5,
                'image' => 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'Asus',
                'model' => 'VivoBook 16',
                'price' => 310000,
                'stock' => 9,
                'image' => 'https://m.media-amazon.com/images/I/71L2VZvzQVL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'Acer',
                'model' => 'Aspire 5',
                'price' => 270000,
                'stock' => 7,
                'image' => 'https://m.media-amazon.com/images/I/71GzH3W9oRL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'Microsoft',
                'model' => 'Surface Laptop Go',
                'price' => 450000,
                'stock' => 6,
                'image' => 'https://m.media-amazon.com/images/I/61WlWYdV5nL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'Razer',
                'model' => 'Blade 15',
                'price' => 800000,
                'stock' => 4,
                'image' => 'https://m.media-amazon.com/images/I/61xc7sH8FQL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'MSI',
                'model' => 'GF63 Thin',
                'price' => 550000,
                'stock' => 3,
                'image' => 'https://m.media-amazon.com/images/I/71O6XwW+eaL._AC_SL1500_.jpg'
            ],
            [
                'brand' => 'Huawei',
                'model' => 'MateBook D15',
                'price' => 330000,
                'stock' => 6,
                'image' => 'https://m.media-amazon.com/images/I/71v1AztzpsL._AC_SL1500_.jpg'
            ],
        ]);
    }
}
