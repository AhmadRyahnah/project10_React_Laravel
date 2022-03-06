<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GovernorateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('governorates')->insert(
            [
                'governorateName' => 'Amman',
                'Image' => 'wwwww',

            ]
        );
        DB::table('governorates')->insert(
            [
                'governorateName' => 'Irbid',
                'Image' => 'wwwww',

            ]
        );
        DB::table('governorates')->insert(
            [
                'governorateName' => 'Ajlon',
                'Image' => 'wwwww',

            ]
        );
        DB::table('governorates')->insert(
            [
                'governorateName' => 'Aqapa',
                'Image' => 'wwwww',

            ]
        );
        DB::table('governorates')->insert(
            [
                'governorateName' => 'Madaba',
                'Image' => 'wwwww',

            ]
        );
        DB::table('governorates')->insert(
            [
                'governorateName' => 'Ablqaa',
                'Image' => 'wwwww',

            ]
        );
    }
}
