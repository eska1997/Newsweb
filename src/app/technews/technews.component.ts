import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {

  constructor( private service:NewsapiserviceService) { }
  
  techNewsDisplay:any = [];

  ngOnInit(): void {
    this.service.techNews().subscribe((data)=>{
      
      this.techNewsDisplay = data.articles;
      console.log(this.techNewsDisplay)
    })
  }

}
