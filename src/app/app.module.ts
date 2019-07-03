import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { CompleteComponent } from './complete/complete.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditTaskDialogComponent } from './materials/edit-task-dialog/edit-task-dialog.component';
import { DeleteTaskDialogComponent } from './materials/delete-task-dialog/delete-task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    CompleteComponent,
    EditTaskDialogComponent,
    DeleteTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule
  ],
  entryComponents: [
    EditTaskDialogComponent,
    DeleteTaskDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
