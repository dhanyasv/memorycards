import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodComponent } from './food/food.component';
import { TopicsDeckComponent } from './topicsDeck/topicsdeck.component';
import { QuestionAnswersComponent } from './questionAnswers/questionAnswers.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WarningComponent,
    SuccessComponent,
    FoodComponent,
    TopicsDeckComponent,
    QuestionAnswersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
