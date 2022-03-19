import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ApicallonkeypressComponent } from './apicallonkeypress/apicallonkeypress.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { FormsModule } from '@angular/forms';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { CommonModule } from '@angular/common';
import { DirectivesassignmentComponent } from './directivesassignment/directivesassignment.component';
import { ReceipeitemComponent } from './Project1/receipe/receipeitem/receipeitem.component';
import { ReceipedetailComponent } from './Project1/receipe/receipedetail/receipedetail.component';
import { ShoppinglistComponent } from './Project1/shopping/shoppinglist/shoppinglist.component';
import { HomeComponent } from './Project1/home/home.component';
import { HeaderComponent } from './Project1/header/header.component';
import { CockpitComponent } from './data_from_parent_to_child/cockpit/cockpit.component';
import { ShowingdataComponent } from './data_from_parent_to_child/showingdata/showingdata.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ApicallonkeypressComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    NgifelseComponent,
    NgstyleComponent,
    DirectivesassignmentComponent,
    HomeComponent,
    HeaderComponent,
    ReceipeitemComponent,
    ReceipedetailComponent,
    ShoppinglistComponent,
    CockpitComponent,
    ShowingdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
