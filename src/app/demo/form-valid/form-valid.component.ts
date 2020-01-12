import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-valid',
  templateUrl: './form-valid.component.html',
  styleUrls: ['./form-valid.component.css']
})
export class FormValidComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

}
