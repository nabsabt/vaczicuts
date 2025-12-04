import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AboutSection } from '../sections/about/about.section';
import { ReferencesSection } from '../sections/references/references.component';
import { PricesComponent } from '../sections/prices/prices.component';
import { ContactSection } from '../sections/contacts/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    FormsModule,
    AboutSection,
    ReferencesSection,
    PricesComponent,
    ContactSection,
  ],
  providers: [],
})
export class HomeComponent implements OnInit {
  @ViewChild('homeContainer') homeContainer!: ElementRef<HTMLDivElement>;

  public subtitleText = signal<string[]>(['']);

  constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
    translateService.setDefaultLang('hu');
    translateService.use('hu');
  }
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  public jumpToSection(section: string): void {
    /* const element = document.getElementById(section);
    if (element) {
      const yOffset = window.innerWidth < 701 ? 75 + 10 : 100 + 10; // Adjust offset for mobile view
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    } */
    const element = document.getElementById(section);
    if (element) {
      //const yOffset = window.innerWidth < 701 ? 75 + 10 : 100 + 10; // Adjust offset for mobile view
      const yOffset = 10;
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

      const container = this.homeContainer.nativeElement;
      const elementTop = element?.offsetTop; // position inside container
      if (elementTop)
        container.scrollTo({
          top: elementTop - yOffset,
          behavior: 'smooth',
        });
    }
  }

  public navigateToExternalPage(url: string) {
    window.open(url, '_blank');
  }
}
