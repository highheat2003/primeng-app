import { Injectable } from '@angular/core';
import {Employee, IEmployee} from '../model/employee-data';


export enum ROWSTATUS {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  READ = 'READ'
}

export interface ExtendColumn {
  rowstatus$?: string;
  origin$?: string;
}

export type DataRow<T> = T & ExtendColumn;

@Injectable({
  providedIn: 'root'
})
export class DatasetService<T> {

  delList: T[] = [];

  constructor() {}

  init(inList: T[]) {
    inList.map((el) => {
      // @ts-ignore
      el.rowstatus$ = ROWSTATUS.READ;
      // @ts-ignore
      el.origin$ = JSON.stringify(el);
    });
    this.delList = [];
  }

  add(inList: T[], data: T) {
    // @ts-ignore
    data.origin$ = JSON.stringify(data);
    // @ts-ignore
    data.rowstatus$ = ROWSTATUS.ADD;
    inList.push(data);
  }

  update(inList: T[], data: T) {
    // @ts-ignore
    if (data.rowstatus$ !== ROWSTATUS.ADD) {
      // origin value와 비교
      // @ts-ignore
      const origin = JSON.parse(data.origin$);
      delete origin.rowstatus$;
      delete origin.origin$;

      const target = JSON.parse(JSON.stringify(data));
      delete target.rowstatus$;
      delete target.origin$;

      if (JSON.parse(JSON.stringify(origin)) === JSON.parse(JSON.stringify(target)) ) {
        // @ts-ignore
        data.rowstatus$ = ROWSTATUS.UPDATE;
      }
    }
  }

  delete(inList: T[], data: T) {
    // @ts-ignore
    if (data.rowstatus$ !== ROWSTATUS.ADD) {
      this.delList.push(data);
    }
    const index = inList.indexOf(data);
    inList = inList.filter((val, i) => i !== index);
  }
}
