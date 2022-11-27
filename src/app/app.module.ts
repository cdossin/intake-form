import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntakeFormComponent } from './intake-form/intake-form.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material Design Components
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from "@angular/material/chips";
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { IntakeFormDataService } from './intake-form/intake-form.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
    IntakeFormComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatProgressBarModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [
      MatToolbarModule,
      MatMenuModule,
      MatSortModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatTabsModule,
      ReactiveFormsModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatBadgeModule,
      MatTableModule,
      MatProgressBarModule,
      MatSelectModule,
      MatOptionModule,
      MatDividerModule,
      MatSidenavModule,
      MatListModule,
      MatCardModule,
      MatChipsModule,
      MatTooltipModule,
      MatSnackBarModule,
      HttpClientModule,
  ],
  providers: [IntakeFormDataService, SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
