import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './@Component/navbar/navbar.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Fodrász – Váczi Attila');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Férfi fodrász Budapesten – hajvágás, festés, styling..',
      },
      { name: 'keywords', content: 'fodrász, hajvágás, barber, budapest, hairdresser' },
      { property: 'og:title', content: 'Modern Fodrászat – Budapest' },
      { property: 'og:description', content: 'Minőségi hajvágás és styling.' },
      { property: 'og:image', content: 'https://vaczicuts.hu/assets/preview.jpg' },
      { property: 'og:url', content: 'https://vaczicuts.hu' },
    ]);
  }
}
