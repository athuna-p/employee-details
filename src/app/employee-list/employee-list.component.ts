import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  paginatedEmployees: any[] = [];
  searchTerm: string = '';

  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private router: Router,
    private employeeService: EmployeeServiceService ,
    ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.updatePagination();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
    this.updatePagination();
  }

  updatePagination() {
    const itemsPerPage = 10;
    this.totalPages = Math.ceil(this.employees.length / itemsPerPage);
    const startIndex = (this.currentPage - 1) * itemsPerPage;
    this.paginatedEmployees = this.employees.slice(startIndex, startIndex + itemsPerPage);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  filterEmployees(): void {
    this.paginatedEmployees = this.employees.filter(employee => 
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.contactNo.includes(this.searchTerm) ||
      employee.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }



  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(employee => employee.id !== id);
    this.updatePagination();
  }

  openAddRegistration(){
    this.router.navigate(['/employee-registration']);

  }
  logout(){
    this.router.navigate(['/login']);

  }

  
}
