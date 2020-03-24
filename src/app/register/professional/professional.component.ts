import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  professionalPersonalFormGroup: FormGroup;
  professionalEmploymentFormGroup: FormGroup;
  professipnalEducationFormGroup: FormGroup;
  displaypersonaldata = {
    'display':''
  }
  displayempoymentdata={
    'display':'none'
  }
  displayeducationdata = {
    'display' : 'none'
  }

  constructor(private formBuilder: FormBuilder, private router : Router) {  }

  ngOnInit(): void {
    this.professionalPersonalFormGroup = this.formBuilder.group({
      name : ["",Validators.required],
      emailId : ["",Validators.compose([Validators.email,Validators.required])],
      password : ["",Validators.compose([Validators.minLength(6),Validators.required])],
      mobileNumber : ["",Validators.compose([Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.required])],
      yearExperience : ["",Validators.required],
      monthExperience : ["",Validators.required]
    });

    this.professionalEmploymentFormGroup=this.formBuilder.group({
      jobTitle:["",Validators.required],
      currentCompany:["",Validators.required],
      lakh:["",Validators.required],
      thousand:["",Validators.required],
      year:["",Validators.required],
      month:["",Validators.required],
      presentYear:["",Validators.required],
      presentMonth:["",Validators.required],
      currentLocation:["",Validators.required],
      noticePeriod:["",Validators.required],
      skills:this.formBuilder.array([]),
      industry:["",],
      functionalArea:["",],
      role:["",]
    });

    this.professipnalEducationFormGroup = this.formBuilder.group({
      qualification : ["",Validators.required],
      course : ["",Validators.required],
      specialization : ["",Validators.required],
      college : ["",Validators.required],
      courseType : ["",Validators.required],
      passingYear : ["",Validators.required],
    })

  }
  addSkill(){
    const skl=this.professionalEmploymentFormGroup.controls.skills as FormArray;
    skl.push(this.formBuilder.group({
      skillName:""
    }));
  }

  onRegister(){
    console.log(this.professionalPersonalFormGroup.value);
    alert("Personal Data Enter Successfully");
    this.displaypersonaldata={
      'display':'none'
    }

    this.displayempoymentdata={
      'display':''
    }

    this.displayeducationdata = {
      'display' : 'none'
    }
  }

  onContinue(){
    console.log(this.professionalEmploymentFormGroup.value);
    alert("Employment Data Enter Successfully");
    this.displaypersonaldata={
      'display':'none'
    }

    this.displayempoymentdata={
      'display':'none'
    }

    this.displayeducationdata = {
      'display' : ''
    }
  }

  onEducation(){
    alert("Employment Data Enter Successfully");
    console.log(this.professipnalEducationFormGroup.value);
  }

}
