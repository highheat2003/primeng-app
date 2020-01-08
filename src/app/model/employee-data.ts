import {ExtendColumn} from '../service/dataset.service';

export class Employee {
  constructor( public id = 0, public empNo = '', public empNm = '', public gradeCd = '', public birthDate = '',
               public femaleYn = '', public deptNm = '') {}
}

export interface IEmployee {
  id: number;
  empNo: string;
  empNm: string;
  gradeCd: string;
  birthDate: string;
  femaleYn: string;
  deptNm: string;
}
