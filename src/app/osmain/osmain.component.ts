import { Component, OnInit, Renderer2 } from '@angular/core';
import {  ActivatedRoute, Router, ParamMap } from '@angular/router';
import{ServiceService} from'../service.service'

@Component({
  selector: 'app-osmain',
  templateUrl: './osmain.component.html',
  styleUrls: ['./osmain.component.css']
})
export class OsmainComponent implements OnInit {
 sets= [
   {"id": 1, "name":"os fullform","ans":"operating system"},
   {"id": 2, "name":" If a process fails, most operating system write the error information to a","ans":"log file"},
   {"id": 3, "name":"The OS X has","ans":"hybrid kernel"}
 ]
 s1ets= [
  {"id": 1, "name":"os fullform"},
  {"id": 2, "name":"which of the following one of the os"},
  {"id": 3, "name":"what does an operating system for"}
]
 s2ets= [
  {"id": 1, "name":"os fullform"},
  {"id": 2, "name":"which of the following one of the os"},
  {"id": 3, "name":"what does an operating system for"}
 ]
  public score;
  public main;
  public questionId;
  public questionId1;
  private a: string;
  constructor(private route: ActivatedRoute, private router: Router, private renderer: Renderer2 ,public service1:ServiceService) { 
    console.log(this.service1.score)
  }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    // let que = parseInt(this.route.snapshot.paramMap.get('que'));
    // console.log(que);
    this.questionId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      const i = parseInt(params.get('id'));
      this.questionId = i;
    });
  }
  goprevious(){
    let previousId = this.questionId - 1;
    if(previousId>0)
    {
      this.router.navigate(['/os', previousId]);
      console.log(previousId);
    }
    
  }
  gonext(){
    let nextId = this.questionId + 1;
     if(nextId<=3)
     {
      this.router.navigate(['/os', nextId]); 
      console.log(nextId);
     }
  }
  gotoos(){
    // let selectedId = this.questionId ? this.questionId : null;
    // this.router.navigate(['/os' ,{ id: selectedId }])
    this.router.navigate(['/quiz'])
  }
  myfun(q1,q2,q3){
    let a = q1;
    let b = q2;
    let d = q3;
    let c= 0;

    if((a == "operating system")||(a == "operatingsystem"))
    {
        c++;
    }
    if((b == "System calls")||(b=="systemcalls")||(b=="system calls"))
    {
        c++;
    }
    if((d == "time and space division multiplexing")||(d=="time and space division"))
    {
        c++;
    }
    this.score = c;
    this.router.navigate(['/osmain', this.score]);
}
myfun1(q1,q2,q3){
  let a = q1;
  let b = q2;
  let d = q3;
  let c= 0;

  if((a == "5")||(a == "five"))
  {
      c++;
  }
  if(b == "hybrid kernal")
  {
      c++;
  }
  if(d == "fork") {
      c++;
  }
  this.score = c;
  this.router.navigate(['/osmain', this.score]);
}

myfun2(q1,q2,q3){
  let a = q1;
  let b = q2;
  let d = q3;
  let c= 0;
  if(a == 'wait') {
      c++;
  }
  if((b == 'hybrid kernal'))
  {
      c++;
  }
  if(d == 'fork')
  {
      c++;
  }
  this.score = c;
  this.router.navigate(['/osmain', this.score]);
}
}
