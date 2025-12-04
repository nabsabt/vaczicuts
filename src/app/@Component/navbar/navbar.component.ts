import { UpperCasePipe } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [RouterModule, TranslateModule, UpperCasePipe],
  providers: [],
  standalone: true,
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarSupportedContent') navbarSupportedContent: ElementRef;

  public changeToLangValue: string;
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }
  ngOnInit(): void {
    this.changeToLangValue = this.translateService.currentLang === 'en' ? 'hu' : 'en';
  }

  changeLanguage() {
    this.translateService.currentLang === 'en'
      ? this.translateService.use('hu')
      : this.translateService.use('en');
    this.changeToLangValue = this.translateService.currentLang === 'en' ? 'hu' : 'en';
  }

  public collapseNavbar() {
    const navbar = this.navbarSupportedContent.nativeElement;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
