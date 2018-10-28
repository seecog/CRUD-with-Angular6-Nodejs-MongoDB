import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private emp: any = {};
  private emps: any[] = [];
  private btn_stt : boolean = false;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getEmployees();
  }

  delEmployee(id) {
    this.http.delete("http://localhost:3000/api/employees/" + id).subscribe(
      (res) => {
        console.log("record deleted");
        this.getEmployees();
      },
      (err) => {
        console.log('The eror is ', err)
      }
    )
  }

  editEmployee(emp){
    this.btn_stt = true;
    this.emp = emp;
  }

  updateEmployee(){
    console.log(this.emp)
    this.http.put("http://localhost:3000/api/employees/"+this.emp._id,this.emp).subscribe(
(res)=>{
  this.getEmployees();
},
(err)=>{
  console.log('The error is ',err)
}


    )
  }

  saveEmployee() {

    this.http.post("http://localhost:3000/api/employees", this.emp).subscribe(
      (res) => {
        console.log('The response is ', res);
        this.emp = {};
        this.getEmployees();
      },
      (err) => {
        console.log('The error is ', err)
      }

    )
  }

  getEmployees() {
    this.http.get("http://localhost:3000/api/employees").subscribe(
      (res) => {
        console.log('The response is ', res.json())
        this.emps = res.json();
      },
      (err) => {
        console.log('The error is ', err)
      }


    )
  }


}
