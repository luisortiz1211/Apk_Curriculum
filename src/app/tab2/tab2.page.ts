import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'infinite-scroll-example',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class  scrollInfinite {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
 
  constructor() {}

  loadData(event) {
    setTimeout((data) => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}