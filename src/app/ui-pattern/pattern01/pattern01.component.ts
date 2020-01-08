import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../service/data.service';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {Code} from '../../model/code-data';
import {Employee} from '../../model/employee-data';

@Component({
  selector: 'app-pattern01',
  templateUrl: './pattern01.component.html',
  styleUrls: ['./pattern01.component.css']
})
export class Pattern01Component implements OnInit {

  emp: Employee = new Employee();
  searchForm: FormGroup;
  id: FormControl;
  // @ts-ignore
  @ViewChild('inputForm')
  inputForm: NgForm;
  models: Code[] = [];
  grades: Code[] = [];
  bEmpNo = false;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchId: new FormControl(null)
    });

    this.dataservice.getGrades().subscribe(data => {
      this.grades = data;
    });
  }

  search() {
    this.dataservice.getEmployee(this.searchForm.value.searchId).subscribe(data => {
      data.length === 1 ? this.emp = data[0] : new Employee();
      this.bEmpNo = false;
    }, error => {
      console.log('@@', error);
    });
  }

  fnInit() {
    this.emp = new Employee();
    this.bEmpNo = true;
  }

  fnSave() {
    this.dataservice.addEmployee(this.emp).subscribe(data => {
      console.log('등록되었습니다.');
      this.emp.empNo = data.empNo;
      this.bEmpNo = false;
    });
  }

  fnUpdate() {
    this.dataservice.updateEmployee(this.emp).subscribe(data => {
      console.log('수정되었습니다.');
      this.bEmpNo = false;
    });
  }

  fnDelete() {
    this.dataservice.deleteEmployee(this.emp.id).subscribe(data => {
      console.log('삭제되었습니다.');
      this.bEmpNo = false;
      this.emp = new Employee();
    });
  }
}
