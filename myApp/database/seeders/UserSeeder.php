<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert(
            [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('12345678'),
                'role' => '1',
                'phone' => '0790327749',
                'location' => 'amman',

            ]
        );
        DB::table('users')->insert(
            [
                'name' => 'Ahmad',
                'email' => 'Ahmad@gmail.com',
                'password' => Hash::make('12345678'),
                'role' => '0',
                'phone' => '0790327749',
                'location' => 'irbid',

            ]
        );
        DB::table('users')->insert(
            [
                'name' => 'ryahnah',
                'email' => 'ryahnah@gmail.com',
                'password' => Hash::make('12345678'),
                'role' => '0',
                'phone' => '0777745108',
                'location' => 'aqaba',

            ]
        );
    }
}
