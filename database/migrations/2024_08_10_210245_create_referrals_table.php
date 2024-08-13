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
            $table->enum('Urgency', ['Low', 'Medium', 'High']);
            $table->string('Hospital');
            $table->string('Name');
            $table->enum('Sex', ['m', 'f']);
            $table->integer('Age');
            $table->string('BloodGroup');
            $table->date('LNMP')->nullable();
            $table->integer('Gravida')->nullable();
            $table->integer('Para')->nullable();
            $table->integer('LCB')->nullable();
            $table->string('ReportedFrom');
            $table->date('ReportedOn');
            $table->json('PresentingComplaints');
            $table->string('Duration');
            $table->json('ExaminationFindings');
            $table->string('WorkingDiagnosis');
            $table->json('DifferentialDiagnosis');
            $table->json('PreReferralManagement');
            $table->string('Procedure')->nullable();
            $table->string('Findings')->nullable();
            $table->json('ReasonsForReferral');
            $table->string('DepartmentReferralDirected');
            $table->integer('UnitsOfBlood');
            $table->string('ReferringOfficer');
            $table->string('Designation');
            $table->string('NameDHO');
            $table->enum('Status', [
                'Requested', 
                'Sent', 
                'Accepted', 
                'Under Treatment', 
                'Referred Back', 
                'Discharged', 
                'Pending'
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
