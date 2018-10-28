import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cruddoctor',
  templateUrl: './cruddoctor.component.html',
  styleUrls: ['./cruddoctor.component.css']
})
export class CruddoctorComponent {
  private doctor:any = {};

  private doctors: any[] = [
    //Name,Age,Speciality,Mobile,Email;
    {
      Name: "Doctor 1",
      Age: "34",
      Speciality: "Eye",
      Email: "abc@pqr.com"
    },
    {
      Name: "Doctor 2",
      Age: "40",
      Speciality: "Heart",
      Email: "abc@pqr.com"
    },
    {
      Name: "Doctor 3",
      Age: "43",
      Speciality: "Nerve",
      Email: "abc@pqr.com"
    }
  ]

  constructor() { }


  deleteDoctor(index) {
    this.doctors.splice(index,1);
  }
  addDoctor() {
    this.doctors.push(this.doctor);
    this.doctor = {};
  }
  ngOnInit() {
  }

}
