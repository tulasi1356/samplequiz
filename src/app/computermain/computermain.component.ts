import { Component, OnInit,Renderer2 } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-computermain',
  templateUrl: './computermain.component.html',
  styleUrls: ['./computermain.component.css']
})
export class ComputermainComponent implements OnInit {
public main;
public x;
  constructor(private route: ActivatedRoute,private renderer: Renderer2) {
    let l = this.route.snapshot.paramMap.get('sum');
    console.log(l);
    this.main = l;
    if (this.main >= 2){
      this.x = true;
    } else {
      this.x = false;
    }
   }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  }

}
