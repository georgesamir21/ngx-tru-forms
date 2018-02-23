import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  template: `
    <label ngClass="{required: isRequired()}">
      {{title()}}<sup *ngIf="isRequired()">*</sup>
    </label>
    <textarea
      class="form-control"
      [name]="schema.key"
      [formControl]="control"
      [attr.maxLength]="schema.maxLength || null"
      [attr.minLength]="schema.minLength || null"
      [attr.placeholder]="placeholder()"
    ></textarea>
  `
})
export class TextareaComponent extends CommonComponent { }

