import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService} from '../services/newsapiservice.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss']
})
export class TopheadingComponent implements OnInit {

  topHeadingDisplay: any = [];

  constructor( private services:NewsapiserviceService) { }

  ngOnInit(): void {

    this.services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

}
