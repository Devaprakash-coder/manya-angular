import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  icons: any = [];
  banner: any = [];
  smallbanner: any = [];
  imgsec: any = [];
  txtsec: any = [];
  spans: any = [];
  gallary: any = [];
  gallaryImage: any;
  ourimg: any = [];
  ourtxt: any = [];
  fabric: any = [];
  fabricImage: any;
  visitimg: any = [];
  visittxt: any = [];
  constructor(private appservice: AppServiceService) { }

  ngOnInit(): void {
    this.appservice.getdata().subscribe((user) => {
      this.icons = user[0].icons;
      this.banner = user[0].banner;
      this.smallbanner = user[0].smallbanner;
      this.imgsec.push(user[0].imgsec);
      this.txtsec.push(user[0].txtsec);
      this.spans = this.txtsec[0].span;
      this.gallary.push(user[0].gallary);
      this.gallaryImage = this.gallary[0].images;
      this.ourimg.push(user[0].ourimg);
      this.ourtxt.push(user[0].ourtxt);
      this.fabric.push(user[0].fabric);
      this.fabricImage = this.fabric[0].images;
      this.visitimg.push(user[0].visitimg);
      this.visittxt.push(user[0].visittxt);
    });
    this.slider();
    this.smallSlider();
    this.spanslide();
    this.next();
  }
sidebarOpen(){
  const sidebar = document.getElementById("sidebar")!;
  sidebar.style.display = "flex";
}
sidebarClose(){
  const sidebar = document.getElementById("sidebar")!;
  sidebar.style.display = "none";
}
shopDiv(){
  const shoplist = document.getElementById("shop-div")!;
  shoplist.style.display = "flex";
}
  model(){
   const $model = document.getElementById("model-overlay")!;
   $model.style.visibility = "visible";
  }
  modelClose(){
    const $model = document.getElementById("model-overlay")!;
    $model.style.visibility = "hidden";
   }
  //  modelnext(){
  //   const change = document.getElementById("model")!;
  //   const next = (change.getElementsByClassName("change") as HTMLCollectionOf<HTMLElement>);
  //   for (let index = 0; index < next.length; index++) {
  //     next[index].style.display = "none"; 
  //   }
  //   next[0].style.display = "block";
  //  }
  nextIndex = 0;
next(){
  const change = document.getElementById("model")!;
  const next = (change.getElementsByClassName("change") as HTMLCollectionOf<HTMLElement>);
  for (let index = 0; index < next.length; index++) {
    next[index].style.display = "none"; 
  }
  if (this.nextIndex > next.length -1) {
    this.nextIndex = 0;
  }
  next[this.nextIndex].style.display = "block"; 
  this.nextIndex++;
  console.log('next',this.nextIndex);
 }
 
 prev(){
  const change = document.getElementById("model")!;
  const next = (change.getElementsByClassName("change") as HTMLCollectionOf<HTMLElement>);
  for (let index = 0; index < next.length; index++) {
    next[index].style.display = "none"; 
  }
  if (this.nextIndex < 0) {
    this.nextIndex = 1;
  }
  this.nextIndex--;
  next[this.nextIndex].style.display = "block"; 
  console.log('prev',this.nextIndex);
 }

  indexValue = 0;

  slider() {
    const slide = document.getElementById("big-slider")!;
    const images = slide.getElementsByTagName("img");
    setTimeout(() => {
      this.slider()
    }, 2000);
    for (let index = 0; index < images.length; index++) {
      images[index].style.display = "none";
    }
    if (this.indexValue > images.length - 1) { this.indexValue = 0 }
    if (this.banner.length > 0) {
      images[this.indexValue].style.display = "block";
    }
    this.indexValue++;
  }

  smallindexValue = 0;

  smallSlider() {
    const smallslide = document.getElementById("small-slider")!;
    const smallimages = smallslide.getElementsByTagName("img");
    setTimeout(() => {
      this.smallSlider();
    }, 2000)
    for (let index = 0; index < smallimages.length; index++) {
      smallimages[index].style.display = "none";
    }
    this.smallindexValue++;
    if (this.smallindexValue > smallimages.length) { this.smallindexValue = 1 }
    if (this.smallbanner.length > 0) {
      smallimages[this.smallindexValue - 1].style.display = "block";
    }
  }

  spanindex = 0;
  spanslide() {
    const span = document.getElementsByTagName("span");
    setTimeout(() => {
      this.spanslide()
    }, 2000);
    for (let index = 0; index < span.length; index++) {
      span[index].style.visibility = "hidden";
    }
    this.spanindex++;
    if (this.spanindex > span.length) { this.spanindex = 1 }
    if (this.spans.length > 0) {
      span[this.spanindex - 1].style.visibility = "visible";
    }
  }
}
