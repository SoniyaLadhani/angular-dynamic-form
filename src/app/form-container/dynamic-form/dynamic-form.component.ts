import { Component, OnInit } from '@angular/core';
import { FormField } from './form-field.model';
import * as formData from '@assets/formData.json';

@Component({
  selector: 'app-form-field',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  private formFieldsList: FormField[];
  constructor() {
    this.formFieldsList = formData.filters;
  }

  ngOnInit() {
    console.log(this.formFieldsList);
  }

}
