import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DividerModule,
    InputTextModule,
    RippleModule,
    ToastModule
  ]
})
export class PrimengModule { }
