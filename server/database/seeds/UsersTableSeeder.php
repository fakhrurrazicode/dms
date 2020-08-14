<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Fakhrurrazi Andi',
                'email' => 'fakhrurrazi.andi@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$ES6cWxjn7wnHUr1uzLP7zuYPiLalXl/SppEPf07de40gmMWCIjwFC',
                'remember_token' => NULL,
                'created_at' => '2020-08-14 05:36:47',
                'updated_at' => '2020-08-14 05:36:47',
            ),
        ));
        
        
    }
}