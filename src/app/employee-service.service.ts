import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  // Initialize the employee list as an array
  private employees: any[] = [
    { id: 1, name: 'Alice Johnson', contactNo: '1234567890', email: 'alice@example.com', address: '123 Main St' },
    { id: 2, name: 'Bob Smith', contactNo: '2345678901', email: 'bob@example.com', address: '456 Oak St' },
    { id: 3, name: 'Charlie Brown', contactNo: '3456789012', email: 'charlie@example.com', address: '789 Pine St' },
    { id: 4, name: 'David Wilson', contactNo: '4567890123', email: 'david@example.com', address: '101 Maple St' },
    { id: 5, name: 'Eva Green', contactNo: '5678901234', email: 'eva@example.com', address: '202 Birch St' },
    { id: 6, name: 'Frank Knight', contactNo: '6789012345', email: 'frank@example.com', address: '303 Cedar St' },
    { id: 7, name: 'Grace Lee', contactNo: '7890123456', email: 'grace@example.com', address: '404 Elm St' },
    { id: 8, name: 'Hannah Scott', contactNo: '8901234567', email: 'hannah@example.com', address: '505 Walnut St' },
    { id: 9, name: 'Ian Wright', contactNo: '9012345678', email: 'ian@example.com', address: '606 Cherry St' },
    { id: 10, name: 'Jake White', contactNo: '0123456789', email: 'jake@example.com', address: '707 Fir St' },
    { id: 11, name: 'Liam Brown', contactNo: '1234567890', email: 'liam@example.com', address: '808 Ash St' },
    { id: 12, name: 'Mia Davis', contactNo: '2345678901', email: 'mia@example.com', address: '909 Spruce St' },
    { id: 13, name: 'Noah Wilson', contactNo: '3456789012', email: 'noah@example.com', address: '100 Poplar St' },
    { id: 14, name: 'Olivia Moore', contactNo: '4567890123', email: 'olivia@example.com', address: '200 Willow St' },
    { id: 15, name: 'Paul Anderson', contactNo: '5678901234', email: 'paul@example.com', address: '300 Cypress St' }
  ];

  constructor() { }

  addEmployee(employee: any) {
    this.employees.push(employee);  
  }

  getEmployees() {
    return this.employees; 
  }
}
