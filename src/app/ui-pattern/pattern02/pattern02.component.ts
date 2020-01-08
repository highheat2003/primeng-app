import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee-data';
import {DataService} from '../../service/data.service';
import {Code} from '../../model/code-data';

@Component({
  selector: 'app-pattern02',
  templateUrl: './pattern02.component.html',
  styleUrls: ['./pattern02.component.css']
})
export class Pattern02Component implements OnInit {

  employees: Employee[];
  emp: Employee;
  grades: Code[] = [];
  displayDialog = false;
  newEmp = false;
  selectedEmp: Employee;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getEmployees().subscribe(data => {
      this.employees = data;
    });

    this.dataservice.getGrades().subscribe(data => {
      this.grades = data;
    });
  }

  convertGrade(gradeCd) {
    const obj = this.grades.filter(data => data.value === gradeCd);
    return obj.length === 1 ? obj[0].label : '';
  }

  convertFemaleYn(femaleYn) {
    return femaleYn === 'Y' ? '여자' : '남자';
  }

  fnAdd() {
    this.newEmp = true;
    this.displayDialog = true;
    this.emp = new Employee();
  }

  fnDelete() {
    if (this.newEmp) {
      this.emp = null;
      this.displayDialog = false;
    } else {
      this.dataservice.deleteEmployee(this.emp.id).subscribe(data => {
        console.log('삭제되었습니다.');
        const index = this.employees.indexOf(this.selectedEmp);
        this.employees = this.employees.filter((val, i) => i !== index);
        this.emp = null;
        this.displayDialog = false;
      });
    }
  }

  fnSave() {
    const emps = [...this.employees];
    if (this.newEmp) {
      emps.push(this.emp);
      this.dataservice.addEmployee(this.emp).subscribe(data => {
        console.log('등록되었습니다.');
        this.employees = emps;
        this.emp = null;
        this.displayDialog = false;
      });
    } else {
      emps[this.employees.indexOf(this.selectedEmp)] = this.emp;
      this.dataservice.updateEmployee(this.emp).subscribe(data => {
        console.log('수정되었습니다.');
        this.employees = emps;
        this.emp = null;
        this.displayDialog = false;
      });
    }
  }

  fnDetail(rowData: Employee) {
    this.newEmp = false;
    this.emp = JSON.parse(JSON.stringify(rowData)); // object clone
    this.selectedEmp = rowData;
    this.displayDialog = true;
  }


}
