import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './main/todos/todos.component';
import { TodoItemsComponent } from './main/todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
