<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FarmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('farms')->insert(
            [
                'farmName' => 'Madaba',
                'description' => '5555',
                'phone' => '5555',
                'price' => '5555',
                'image' => '1.jpg',
                'Time' => 'available',
                'governorate_id' => '1'

            ]
        );
        DB::table('farms')->insert(
            [
                'farmName' => 'Madaba',
                'description' => '5555',
                'phone' => '5555',
                'price' => '5555',
                'image' => '1.jpg',
                'Time' => 'available',
                'governorate_id' => '2'

            ]
        );
        DB::table('farms')->insert(
            [
                'farmName' => 'Madaba',
                'description' => '5555',
                'phone' => '5555',
                'price' => '5555',
                'image' => '1.jpg',
                'Time' => 'available',
                'governorate_id' => '3'

            ]
        );
        DB::table('farms')->insert(
            [
                'farmName' => 'Madaba',
                'description' => '5555',
                'phone' => '5555',
                'price' => '5555',
                'image' => '1.jpg',
                'Time' => 'available',
                'governorate_id' => '4'

            ]
        );
        DB::table('farms')->insert(
            [
                'farmName' => 'Madaba',
                'description' => '5555',
                'phone' => '5555',
                'price' => '5555',
                'image' => '1.jpg',
                'Time' => 'available',
                'governorate_id' => '5'

            ]
        );
        DB::table('farms')->insert(
            [
                'farmName' => 'Madaba',
                'description' => '5555',
                'phone' => '5555',
                'price' => '5555',
                'image' => '1.jpg',
                'Time' => 'available',
                'governorate_id' => '6'

            ]
        );
    }
}
