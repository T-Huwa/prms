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
            $table->foreignId('referral_id')->constrained('referrals');
            $table->string('responding_department');
            $table->date('date');
            $table->string('final_diagnosis');
            $table->longText('other_diagnoses')->nullable();
            $table->string('management_1')->nullable();
            $table->string('management_2')->nullable();
            $table->string('management_3')->nullable();
            $table->string('type_of_surgery')->nullable();
            $table->string('findings')->nullable();
            $table->string('outcome')->nullable();
            $table->string('post_discharge_instruction_1')->nullable();
            $table->string('post_discharge_instruction_2')->nullable();
            $table->string('post_discharge_instruction_3')->nullable();
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

