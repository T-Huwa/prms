<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReferralsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('referrals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('gender', ['m', 'f']);
            $table->integer('age');
            $table->enum('urgency', ['Low', 'Medium', 'High']);
            $table->foreignId('hospital_from_id')->constrained('hospitals');
            $table->foreignId('hospital_to_id')->nullable()->constrained('hospitals');
            $table->string('blood_group');
            $table->date('lnmp')->nullable();
            $table->integer('gravida')->nullable();
            $table->integer('para')->nullable();
            $table->integer('lcb')->nullable();
            $table->string('reported_from');
            $table->date('reported_on');
            $table->json('complaints');
            $table->string('duration');
            $table->json('examination_findings');
            $table->string('working_diagnosis');
            $table->json('differential_diagnosis');
            $table->json('pre_referral_management');
            $table->string('procedure')->nullable();
            $table->string('findings')->nullable();
            $table->json('reasons');
            $table->string('department_referral_directed');
            $table->integer('blood_units')->nullable();
            $table->foreignId('nurse_sending_id')->nullable()->constrained('users');
            $table->foreignId('nurse_receiving_id')->nullable()->constrained('users');
            $table->foreignId('receiving_officer_id')->nullable()->constrained('users');
            $table->foreignId('referring_officer_id')->constrained('users');
            $table->string('designation');
            $table->string('DHO_name');
            $table->longText('other-remarks')->nullable();
            $table->enum('status', [
                'Requested',
                'Sent', 
                'Under Treatment',
                'Referred Back',
                'Discharged', 
                'Pending',
                'Cancelled'
            ]);            
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
        Schema::dropIfExists('referrals');
    }
}
