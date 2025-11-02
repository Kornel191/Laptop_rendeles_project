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
                'image' => 'images/dell.png'
            ],
            [
                'brand' => 'HP',
                'model' => 'Pavilion 14',
                'price' => 280000,
                'stock' => 8,
                'image' => 'images/hppavilon.png'
            ],
            [
                'brand' => 'Lenovo',
                'model' => 'IdeaPad 3',
                'price' => 250000,
                'stock' => 12,
                'image' => 'images/lenovo.png'
            ],
            [
                'brand' => 'Apple',
                'model' => 'MacBook Air M2',
                'price' => 620000,
                'stock' => 5,
                'image' => 'images/macbookm14.png'
            ],
            [
                'brand' => 'Asus',
                'model' => 'VivoBook 16',
                'price' => 310000,
                'stock' => 9,
                'image' => 'images/asus.png'
            ],
            [
                'brand' => 'Acer',
                'model' => 'Aspire 5',
                'price' => 270000,
                'stock' => 7,
                'image' => 'images/acer.png'
            ],
            [
                'brand' => 'Microsoft',
                'model' => 'Surface Laptop Go',
                'price' => 450000,
                'stock' => 6,
                'image' => 'images/microsoft.png'
            ],
            [
                'brand' => 'Razer',
                'model' => 'Blade 15',
                'price' => 800000,
                'stock' => 4,
                'image' => 'images/razer.png'
            ],
            [
                'brand' => 'MSI',
                'model' => 'GF63 Thin',
                'price' => 550000,
                'stock' => 3,
                'image' => 'images/msi.png'
            ],

        ]);
    }
}
