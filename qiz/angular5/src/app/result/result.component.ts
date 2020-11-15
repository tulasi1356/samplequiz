import { Component, OnInit ,Renderer2} from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 public main;
 public x;
  constructor(private route: ActivatedRoute,private renderer: Renderer2 ) {
    let l = this.route.snapshot.paramMap.get('score');
    this.main = l;
    if (this.main >=  2) {
      this.x = true;
    } 
    else
    {
      this.x=false;
    }
   }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
    
  }
  

}
 
