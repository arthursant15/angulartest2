import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angulartest2');
}
