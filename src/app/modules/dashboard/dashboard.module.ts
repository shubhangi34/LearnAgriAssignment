import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardService } from './services/dashboard.service';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule, MatSnackBarModule } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsComponent } from './components/comments/comments.component';
import { AddComponent } from './components/add/add.component';
import { ControlMessageComponent } from './control-message/control-message.component';

@NgModule({
  declarations: [DashboardComponent, AddComponent, CommentsComponent, HeaderComponent, ControlMessageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents: [AddComponent],
  providers: [DashboardService]

})
export class DashboardModule { }
