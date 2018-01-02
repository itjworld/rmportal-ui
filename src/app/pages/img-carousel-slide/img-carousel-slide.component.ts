import { Component } from '@angular/core';

@Component({
  selector: 'app-img-carousel-slide',
  templateUrl: './img-carousel-slide.component.html',
  styleUrls: ['./img-carousel-slide.component.css']
})
export class ImgCarouselSlideComponent  {

  items: Array<any> = []
    constructor() {
      this.items = [
        { url: 'assets/images/room2.jpg',alt:'room2' },
        { url: 'assets/images/room3.jpg',alt:'room3' },
        { url: 'assets/images/room4.jpg',alt:'room4' },
        { url: 'assets/images/room5.jpg',alt:'room5' },
        
      ]
    }

  

}
