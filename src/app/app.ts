import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing} from './landing/landing';
import { Navbar } from './navbar/navbar';
import { About } from './about/about';
import { Skills } from './skills/skils';
import { Experience } from './experience/experience'; 
import { Articles } from './articles/articles';
import e from 'express';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Landing,Navbar,About,Skills,Experience,Articles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
