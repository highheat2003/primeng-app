import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {User} from '../model/user-data';
import {Employee, IEmployee} from '../model/employee-data';
import {Code} from '../model/code-data';
import {Book} from '../model/book-data';
import {DataRow} from './dataset.service';
import {Center, MngArea} from '../model/center-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements InMemoryDbService {

  createDb() {
    const users: User[] = [
      { id: 1, name: 'Pen', model: 'v1', price: '0000000000', modelValue: '1' },
      { id: 2, name: 'Pencil', model: 'A3', price: '1111111111', modelValue: '2' },
      { id: 3, name: 'Table', model: 'N8', price: '2222222222', modelValue: '3' },
      { id: 4, name: 'Chair', model: 'M9', price : '6666666666', modelValue: '4' },
      { id: 5, name: 'Bed', model: 'PZ', price: '9909999999', modelValue: '5' }

    ];

    const models: Code[] = [
      {value: '1', label: 'v1'},
      {value: '2', label: 'A3'},
      {value: '3', label: 'N8'},
      {value: '4', label: 'M9'},
      {value: '5', label: 'PZ'},
    ];

    /*
     *  id값을 unique하게 지정해야 등록이 가능함.
     * */
    const employees: Employee[] = [
      {id: 1, empNo: '001', empNm: '홍길동', gradeCd: '1000', birthDate: '', femaleYn: 'N', deptNm: '경영기획실'},
      {id: 2, empNo: '002', empNm: '전우치', gradeCd: '2000', birthDate: '', femaleYn: 'Y', deptNm: '인사부'},
      {id: 3, empNo: '003', empNm: '김철수', gradeCd: '3000', birthDate: '', femaleYn: 'N', deptNm: '생산관리'},
      {id: 4, empNo: '004', empNm: '전춘배', gradeCd: '4000', birthDate: '', femaleYn: 'N', deptNm: '경영기획실'},
      {id: 5, empNo: '005', empNm: '고길동', gradeCd: '5000', birthDate: '', femaleYn: 'N', deptNm: 'it팀'},
      {id: 6, empNo: '006', empNm: '이준우', gradeCd: '5000', birthDate: '', femaleYn: 'N', deptNm: '연구팀'},
    ];

    const grades: Code[] = [
      {value: '', label: '선택'},
      {value: '1000', label: '임원'},
      {value: '2000', label: '부장'},
      {value: '3000', label: '과장'},
      {value: '4000', label: '대리'},
      {value: '5000', label: '사원'},
    ];

    const targetEmps: Employee[] = [];

    const books: Book[] = [
      {id: 1, name: 'The Godfather', price: 10, author: 'Mario Puzo'},
      {id: 2, name: 'The Fellowship of the Ring', price: 15, author: 'J.R.R. Tolkien'},
      {id: 3, name: 'Harry Potter and the Deathly Hallows', price: 20, author: 'J.K. Rowling  '}
    ];

    const employees2: DataRow<IEmployee>[] = [
      {id: 1, empNo: '001', empNm: '홍길동', gradeCd: '1000', birthDate: '', femaleYn: 'N', deptNm: '경영기획실'},
      {id: 2, empNo: '002', empNm: '전우치', gradeCd: '2000', birthDate: '', femaleYn: 'Y', deptNm: '인사부'},
      {id: 3, empNo: '003', empNm: '김철수', gradeCd: '3000', birthDate: '', femaleYn: 'N', deptNm: '생산관리'},
      {id: 4, empNo: '004', empNm: '전춘배', gradeCd: '4000', birthDate: '', femaleYn: 'N', deptNm: '경영기획실'},
      {id: 5, empNo: '005', empNm: '고길동', gradeCd: '5000', birthDate: '', femaleYn: 'N', deptNm: 'it팀'},
      {id: 6, empNo: '006', empNm: '이준우', gradeCd: '5000', birthDate: '', femaleYn: 'N', deptNm: '연구팀'},
    ];

    const centers: Center[] = [
      {id: 1, centerCd: '2000', centerNm: '경기센터'},
      {id: 2, centerCd: '3000', centerNm: '경북센터'},
      {id: 3, centerCd: '4000', centerNm: '대전센터'},
      {id: 4, centerCd: '5000', centerNm: '전북센터'},
      {id: 5, centerCd: '6000', centerNm: '제주센터'},
      {id: 6, centerCd: '7000', centerNm: '광주센터'},
    ];

    const mngAreas: MngArea[] = [
      {id: 1, centerCd: '2000', areaCd: '2100', areaNm: '서울'},
      {id: 2, centerCd: '2000', areaCd: '2200', areaNm: '파주'},
      {id: 3, centerCd: '3000', areaCd: '3100', areaNm: '대구'},
      {id: 4, centerCd: '3000', areaCd: '3200', areaNm: '구미'},
      {id: 5, centerCd: '4000', areaCd: '4100', areaNm: '대전'},
      {id: 6, centerCd: '5000', areaCd: '5100', areaNm: '남원'},
      {id: 7, centerCd: '6000', areaCd: '6100', areaNm: '서귀포'},
    ];

    return {users, models, employees, grades, targetEmps, books, employees2, centers, mngAreas};
  }
}
