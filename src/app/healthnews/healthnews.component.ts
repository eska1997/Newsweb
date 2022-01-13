import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service'

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.scss']
})
export class HealthnewsComponent implements OnInit {

  constructor( private service:NewsapiserviceService) { }

  healthNewsDisplay:any =[];
  ngOnInit(): void {
    this.service.healthNews().subscribe((data)=>{
      this.healthNewsDisplay = data.articles;
      
    })
  }

}
