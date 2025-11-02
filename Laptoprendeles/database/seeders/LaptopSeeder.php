<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LaptopSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('laptops')->delete();

        DB::statement('ALTER TABLE laptops AUTO_INCREMENT = 1');

        DB::table('laptops')->insert([
            [
                'brand' => 'Dell',
                'model' => 'Inspiron 15',
                'price' => 320000,
                'stock' => 10,
                'image' => 'images/dell.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'HP',
                'model' => 'Pavilion 14',
                'price' => 280000,
                'stock' => 8,
                'image' => 'images/hppavilon.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'Lenovo',
                'model' => 'IdeaPad 3',
                'price' => 250000,
                'stock' => 12,
                'image' => 'images/lenovo.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'Apple',
                'model' => 'MacBook Air M2',
                'price' => 620000,
                'stock' => 5,
                'image' => 'images/macbookm14.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'Asus',
                'model' => 'VivoBook 16',
                'price' => 310000,
                'stock' => 9,
                'image' => 'images/asus.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'Acer',
                'model' => 'Aspire 5',
                'price' => 270000,
                'stock' => 7,
                'image' => 'images/acer.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'Microsoft',
                'model' => 'Surface Laptop Go',
                'price' => 450000,
                'stock' => 6,
                'image' => 'images/microsoft.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'Razer',
                'model' => 'Blade 15',
                'price' => 800000,
                'stock' => 4,
                'image' => 'images/razer.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'brand' => 'MSI',
                'model' => 'GF63 Thin',
                'price' => 550000,
                'stock' => 3,
                'image' => 'images/msi.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);
    }
}
