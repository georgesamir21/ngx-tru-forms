import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  template: `
  <p><span tabindex="0">{{placeholder()}}</span> <span tabindex="0" *ngIf="control.value">{{translateDate() | titlecase }}</span></p>
  `
})
export class DateViewComponent extends CommonComponent {
  numberMask = createNumberMask({ allowDecimal: false, prefix: '' });

  cleanMask(value) {
    this.control.setValue(value.replace(/\D/g, ''));
  }
  translateDate() {
    return this.control.value ? moment(this.control.value).locale(this.language).format('DD MMM, YYYY').replace('.', '') : '';
  }
}
