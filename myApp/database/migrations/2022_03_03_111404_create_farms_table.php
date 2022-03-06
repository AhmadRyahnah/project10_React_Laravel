<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('farms', function (Blueprint $table) {
            $table->id();



            // $table->foreign('governorateID')->references('id')->on('governorates')->onDelete('cascade');




            $table->string('farmName');
            // $table->unsignedBigInteger('governorateID')->references('id')->on('governorates')->onDelete('cascade');

            $table->longText('description');
            $table->text('phone');
            $table->double('price');
            $table->string('image')->default('');
            $table->enum('Time', ['available', 'unavailable']);
            $table->unsignedBigInteger('governorateID')->nullable();
            $table->foreign('governorateID')->references('id')->on('governorates')->onDelete('cascade');

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('farms');
    }
};
