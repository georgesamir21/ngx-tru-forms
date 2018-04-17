import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {JsonSchemaExamplesSamples} from './json-schema-examples.samples';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {JsonFormComponent, JsonFormFieldsService} from 'angular-json-form';
import {InputColourComponent} from './input-colour/input-colour.component';

@Component({
  selector: 'app-json-schema-examples',
  templateUrl: './json-schema-examples.component.html',
  styleUrls: [
    './json-schema-examples.component.css',
  ]
})
export class JsonSchemaExamplesComponent implements OnInit {
  public schema: {};
  public schemaControl: FormControl;
  public form: FormGroup;
  @ViewChild('jfForm', { read: ViewContainerRef }) jfForm: JsonFormComponent;
  @ViewChild('jsonSchema') jsonSchema: ElementRef;
  @ViewChild('formResponse') formResponse: ElementRef;

  constructor(
    public jsonSchemaExamplesSamples: JsonSchemaExamplesSamples,
    public jsonFormFieldsService: JsonFormFieldsService
  ) { }

  ngOnInit() {
    this.jsonFormFieldsService.register('colour', InputColourComponent);

    const ValidatorJSON = (control: AbstractControl) => {
      try {
        JSON.parse(control.value);
        return null;
      } catch (err) {
        return { invalidJSON: err.message };
      }
    };

    this.schema = this.jsonSchemaExamplesSamples.json.conditional_control;
    this.schemaControl = new FormControl('', ValidatorJSON);
    this.form = new FormGroup({ schema: this.schemaControl });
    this.schemaControl.setValue(JSON.stringify(this.schema, null, '\t'));
  }

  handleSubmit(data) {
    this.formResponse.nativeElement.innerHTML = JSON.stringify(data, null, 2);
  }

  handleChange(value?: string) {
    if (typeof (value) !== 'undefined') {
      this.schemaControl.setValue(JSON.stringify(this.jsonSchemaExamplesSamples.json[value], null, '\t'));
    }

    try {
      this.schema = JSON.parse(this.schemaControl.value);
    } catch {}
  }

  getSchemaSamples() {
    return Object.keys(this.jsonSchemaExamplesSamples.json);
  }

  onTabKey(event) {
    event.preventDefault();
    const start = this.jsonSchema.nativeElement.selectionStart;
    const end = this.jsonSchema.nativeElement.selectionEnd;
    this.schemaControl.setValue(this.schemaControl.value.substring(0, start) + '\t' +
      this.schemaControl.value.substring(end));
    this.jsonSchema.nativeElement.selectionStart =
      this.jsonSchema.nativeElement.selectionEnd = start + '\t'.length;
  }

  onEnterKey(event) {
    event.preventDefault();
    const start = this.jsonSchema.nativeElement.selectionStart;
    const end = this.jsonSchema.nativeElement.selectionEnd;
    const matches = [];
    const reg = /\t+/g;
    const string = this.schemaControl.value.substr(0, start);
    const reg2 = /\t+/;
    let m;
    let spaces = '';

    while ((m = reg.exec(string)) !== null) {
      matches.push(string.substring(m.index).match(reg2)[0]);
    }

    if (matches.length) {
      spaces = matches[matches.length - 1];
    }

    this.schemaControl.setValue(this.schemaControl.value.substring(0, start) + '\n' + spaces +
      this.schemaControl.value.substring(end));
    this.jsonSchema.nativeElement.selectionStart =
      this.jsonSchema.nativeElement.selectionEnd = start + '\n'.length + spaces.length;
  }

  goToError(string) {
    const position = string.split(' ');
    const col = +position[position.length - 1];
    this.jsonSchema.nativeElement.selectionStart = col;
    this.jsonSchema.nativeElement.focus();
  }
}