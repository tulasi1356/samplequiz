import { Component, OnInit,Renderer2} from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
public sum =0;
public a;
public b;
public c;
  constructor( private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  }
  onsel() {
this.c = true;
  }
onselect(q1,q2,q3){
  if(q1 == "facebook") {
    this.sum = this.sum + 1;
  }
  if(q2== "puma"){
    this.sum = this.sum + 1;
  }
  if(q3=="paypal"){
    this.sum = this.sum + 1;
  }
  console.log(this.sum)
  if(this.sum > 1){
    this.a = true;
  }
  else{
    this.b = true;
  }
}

}
