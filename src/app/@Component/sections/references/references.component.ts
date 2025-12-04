import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LightgalleryModule } from 'lightgallery/angular/13';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'references-section',
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
  imports: [LightgalleryModule, TranslateModule],
})
export class ReferencesSection implements OnInit {
  ngOnInit(): void {}
  settings = {
    counter: false,
    plugins: [],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };
}
