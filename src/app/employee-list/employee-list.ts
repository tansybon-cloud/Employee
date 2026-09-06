import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// កំណត់ប្រភេទទិន្នន័យ (Interface) ដើម្បីងាយស្រួល
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: string;
  status: string;
  level: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  standalone: true,
  imports: [CommonModule]
})
export class EmployeeListComponent {
  // ប្រសិនបើចង់បង្ហាញទិន្នន័យដូចក្នុងរូប សូមដាក់ដូចនេះ
  employees: Employee[] = [
    { id: 1, name: 'Dara', position: 'Manager', salary: '$1,200', status: 'Active', level: 'Manager' },
    { id: 2, name: 'Sokha', position: 'Staff', salary: '$850', status: 'Inactive', level: 'Staff' },
    { id: 3, name: 'Rina', position: 'Intern', salary: '$400', status: 'Active', level: 'Intern' },
    { id: 4, name: 'Vanna', position: 'Staff', salary: '$900', status: 'Active', level: 'Staff' }
  ];

  // ប្រសិនបើចង់សាកល្បងមើល Empty State (គ្មានបុគ្គលិក) 
  // សូមប្តូរអថេរខាងលើទៅជា employees: Employee[] = []; វិញ
}