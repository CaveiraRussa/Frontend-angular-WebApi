import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { TableComponent } from '../../components/table/table.component';
import { HomeLayoutComponent } from '../../components/home-layout/home-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, TableComponent, HomeLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    TableComponent,
    HomeLayoutComponent,
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
