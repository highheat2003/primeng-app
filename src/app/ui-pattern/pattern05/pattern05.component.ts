import { Component, OnInit } from '@angular/core';
import {Center, MngArea} from '../../model/center-data';
import {DataService} from '../../service/data.service';
import {Employee} from '../../model/employee-data';

@Component({
  selector: 'app-pattern05',
  templateUrl: './pattern05.component.html',
  styleUrls: ['./pattern05.component.css']
})
export class Pattern05Component implements OnInit {

  centers: Center[];
  selectedCenter: Center;
  newCenter = false;
  center: Center;
  displayDialogCenter = false;

  mngAreas: MngArea[];
  selectedMngArea: MngArea;
  newMngArea = false;
  mngArea: MngArea;
  displayDialogMngArea = false;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getCenters().subscribe(data => {
      this.centers = data;
      this.mngAreas = [];
    });
  }

  onRowSelect($event: any) {
    // console.log($event, this.selectedCenter);
    this.dataservice.getMngAreas(this.selectedCenter.centerCd).subscribe(data => {
      this.mngAreas = data;
    });
  }

  fnCenterAdd() {
    this.newCenter = true;
    this.displayDialogCenter = true;
    this.center = new Center();
  }

  fnCenterDetail(rowData: Center) {
    this.newCenter = false;
    this.center = JSON.parse(JSON.stringify(rowData));
    this.selectedCenter = rowData;
    this.displayDialogCenter = true;
  }

  fnCenterSave() {
    if (this.newCenter) {
      this.dataservice.addCenter(this.center).subscribe(data => {
        console.log('등록되었습니다.');
        this.centers.push(data);
        this.center = null;
        this.displayDialogCenter = false;
      });
    } else {
      this.dataservice.updateCenter(this.center).subscribe(data => {
        console.log('수정되었습니다.');
        this.centers[this.centers.indexOf(this.selectedCenter)] = data;
        this.center = null;
        this.displayDialogCenter = false;
      });
    }
  }

  fnCenterDelete() {
    if (this.newCenter) {
      this.center = null;
      this.displayDialogCenter = false;
    } else {
      this.dataservice.deleteCenter(this.center.id).subscribe(data => {
        console.log('삭제되었습니다.');
        const index = this.centers.indexOf(this.selectedCenter);
        this.centers = this.centers.filter((val, i) => i !== index);
        this.center = null;
        this.displayDialogCenter = false;
      });
    }
  }

  fnMngAreaAdd() {
    this.newMngArea = true;
    this.displayDialogMngArea = true;
    this.mngArea = new MngArea();
    this.mngArea.centerCd = this.selectedCenter.centerCd;
  }

  fnMngAreaDetail(targetData: MngArea) {
    this.newMngArea = false;
    this.mngArea = JSON.parse(JSON.stringify(targetData));
    this.selectedMngArea = targetData;
    this.displayDialogMngArea = true;
    this.mngArea.centerCd = this.selectedCenter.centerCd;
  }

  fnMngAreaSave() {
    if (this.newMngArea) {
      this.dataservice.addMngArea(this.mngArea).subscribe(data => {
        console.log('등록되었습니다.');
        this.mngAreas.push(data);
        this.mngArea = null;
        this.displayDialogMngArea = false;
      });
    } else {
      this.dataservice.updateMngArea(this.mngArea).subscribe(data => {
        console.log('수정되었습니다.');
        this.mngAreas[this.mngAreas.indexOf(this.selectedMngArea)] = data;
        this.mngArea = null;
        this.displayDialogMngArea = false;
      });
    }
  }

  fnMngAreaDelete() {
    if (this.newMngArea) {
      this.mngArea = null;
      this.displayDialogMngArea = false;
    } else {
      this.dataservice.deleteMngArea(this.mngArea.id).subscribe(data => {
        console.log('삭제되었습니다.');
        const index = this.mngAreas.indexOf(this.selectedMngArea);
        this.mngAreas = this.mngAreas.filter((val, i) => i !== index);
        this.mngArea = null;
        this.displayDialogMngArea = false;
      });
    }
  }

}
