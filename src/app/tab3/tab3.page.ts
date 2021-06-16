import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'skeleton-text-example',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class skeleton {
  data: any;
  data1:any;
  data2:any;
  data3:any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Escuela politecnica Nacional ',
        'para1': 'Estudiante - Desarrollo de software',
        'para2': '2018 '
      };
      this.data1={
        'heading': 'Biodimed',
        'para1': 'Asistente de seguros',
        'para2': '2016'
      };
      this.data2={
        'heading': 'Yanapi',
        'para1': 'Operario',
        'para2': '2014'
      };
      this.data3={
        'heading': 'Argold Ecuador',
        'para1': 'Operario',
        'para2': '2010'
      }
    }, 5000);
  }
 }
 