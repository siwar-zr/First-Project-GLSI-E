import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from "./components/ng-if/ng-if.component";
import { NgForComponent } from "./components/ng-for/ng-for.component";
import { NgClassComponent } from "./components/ng-class/ng-class.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, NgIfComponent, NgForComponent, NgClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
}
