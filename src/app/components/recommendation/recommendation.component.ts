import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  constructor() { }

  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;

  slides: Array<any> = [
    {
      thumbImage: 'assets/images/img-chaussure-1.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      thumbImage: 'assets/images/img-chaussure-3.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      thumbImage: 'assets/images/img-chaussure-4.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      thumbImage: 'assets/images/img-chaussure-5.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      thumbImage: 'assets/images/img-chaussure-1.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      thumbImage: 'assets/images/img-chaussure-3.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      thumbImage: 'assets/images/img-chaussure-4.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      thumbImage: 'assets/images/img-chaussure-5.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  ngOnInit(): void {
  }
  next(): void {
    this.slickModal.slickNext();
  }
  prev(): void {
    this.slickModal.slickPrev();
  }

}
