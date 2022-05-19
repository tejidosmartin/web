import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

const animation = { duration: 5000, easing: (t: any) => t };

@Component({
  selector: 'app-carousel-brands',
  templateUrl: './carousel-brands.component.html',
  styleUrls: [
    '../../../../../node_modules/keen-slider/keen-slider.min.css',
    './carousel-brands.component.css',
  ],
})
export class CarouselBrandsComponent implements OnInit {

  titulo = "Marcas Asociadas"

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      renderMode: 'precision',
      drag: false,
      created(s) {
        s.moveToIdx(1, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
