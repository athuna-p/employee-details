import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  employeeRegistrationForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router , 
    private employeeService: EmployeeServiceService ,
    ) {
      this.employeeRegistrationForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Contact number validation
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.employeeRegistrationForm.valid) {
      const employeeData = { 
        ...this.employeeRegistrationForm.value,
        id: this.generateId() 
      };      
      this.employeeService.addEmployee(employeeData); 
      this.router.navigate(['/employee-list']);    } 
      else {
      console.log('Form is invalid');
    }
  }
  goback() {
    this.router.navigate(['/employee-list']);

  }
  generateId(): number {
    return this.employeeService.getEmployees().length + 1; 
  }
  logout(){
    this.router.navigate(['/login']);

  }
}
