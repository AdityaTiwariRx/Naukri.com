import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrls: ['./fresher.component.css']
})
export class FresherComponent implements OnInit {
  fresherPersonalFormGroup: FormGroup;
  fresherEducationFormGroup : FormGroup;
  constructor(private formBuilder: FormBuilder, private router : Router) {  }

  displaypersonaldata = {
    'display' : ''
  }
  displayeducationdata = {
    'display' : 'none'
  }

  ngOnInit(): void {
    this.fresherPersonalFormGroup = this.formBuilder.group({
      name : ["",Validators.required],
      emailId : ["",Validators.compose([Validators.email,Validators.required])],
      password : ["",Validators.compose([Validators.minLength(6),Validators.required])],
      mobileNumber : ["",Validators.compose([Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.required])],
      currentLocation : ["",Validators.required],
      resume : ["",]
    });
    
    this.fresherEducationFormGroup = this.formBuilder.group({
      qualification : ["",Validators.required],
      course : ["",Validators.required],
      specialization : ["",Validators.required],
      college : ["",Validators.required],
      courseType : ["",Validators.required],
      passingYear : ["",Validators.required],
      skills: this.formBuilder.array([])
    })
  }
  addSkill(){
    const skl=this.fresherEducationFormGroup.controls.skills as FormArray;
    skl.push(this.formBuilder.group({
      skillName:""
    }));
  }

  onRegister(){
    console.log(this.fresherPersonalFormGroup.value);
    alert("Personal Data Enter Successfully");
    this.displaypersonaldata = {
      display : 'none'
  }  
 this.displayeducationdata = {
      display : ''
    }
  }

  onContinue(){
    console.log(this.fresherEducationFormGroup.value);
    alert("Education Data Enter Successfully");
  }
}
