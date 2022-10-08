import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FullnamePipe } from '../pipes/fullname.pipe';

const pipes = [FullnamePipe];

const modules = [ReactiveFormsModule];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...pipes],
})
export class SharedModule {}
