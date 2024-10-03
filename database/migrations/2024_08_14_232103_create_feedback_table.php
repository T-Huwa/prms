<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeedbackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feedback', function (Blueprint $table) {
            $table->id();
            $table->foreignId('responding_ward_id')->constrained('wards');
            $table->date('date');
            $table->string('final_diagnosis');
            $table->string('other_diagnoses')->nullable();
            $table->json('management');
            $table->string('type_of_surgery')->nullable();
            $table->string('findings')->nullable();
            $table->string('outcome');
            $table->json('post_discharge_instructions');
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
        Schema::dropIfExists('feedback');
    }
}
