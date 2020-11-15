import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
public sum=0;
public a;
public b;
  constructor( private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  }
  onselect(q1,q2,q3){
    q1=q1.toLowerCase( );
    q2=q2.toLowerCase( );
    q3=q3.toLowerCase( )
   if(q1=="venkymama"){
     this.sum = this.sum + 1;
   }
   if(q2=="rangasthalam"){
      this.sum = this.sum + 1 ;
   }
   if(q3 == "bichagadu"){
     this.sum = this.sum + 1;
   }
   if(this.sum>1){
     this.a = true;
   }
   else{
     this.b = true;
   }
  }

}
