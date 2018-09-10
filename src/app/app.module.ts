import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TuitComponent } from './componentes/tuit/tuit.component';
import { MonitorComponent } from './componentes/monitor/monitor.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpService } from 'src/app/servicios/http.service';
import { TwitterService } from 'src/app/servicios/redesSociales/twitter.service';
import { HttpModule } from '@angular/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TuitComponent,
    MonitorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    FormsModule

  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
