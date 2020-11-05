import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  slides: Array<any> = [
    {
      image: 'assets/img/slider/1.jpg',
      thumbImage: 'assets/images/img-chaussure-1.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      image: 'assets/img/slider/2.jpg',
      thumbImage: 'assets/images/img-chaussure-3.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      image: 'assets/img/slider/3.jpg',
      thumbImage: 'assets/images/img-chaussure-4.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
    {
      image: 'assets/img/slider/4.jpg',
      thumbImage: 'assets/images/img-chaussure-5.jpg',
      alt: 'Rebok',
      title: 'Rebok C 85'
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 6,
    dots: false,
    infinite: false,
    loop: false,
    nextArrow: document.getElementsByClassName('next1'),
    prevArrow: document.getElementsByClassName('prev1'),
  };


  constructor() { }

  ngOnInit(): void {
  }

}
