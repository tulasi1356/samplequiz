import { Component, OnInit ,Renderer2} from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router,private renderer: Renderer2 ) { }
public sum = 0;
questions2=[
  {"que"  : "1.  What is short int in C programming?" ,
  "option1":"a)the basic data type", 
  "option2":" b)qualifier",
  "option3":" c)short is the qualifier int is basic data type",
  "option4":"d)none of these",
   "ansid":3},
  {"que"  : "2.Which data type is most suitable for storing a number 65000 in a 32-bit system?" ,
  "option1":"a)4 bytes", 
  "option2":" b)8 bytes",
  "option3":" c)Depends on the system/compiler",
  "option4":"d)Cannot determine",
   "ansid":3
  },
  {"que":"3.Which data type is most suitable for storing a number 65000 in a     32-bit system?",
  "option1":"a)int",
  "option2":"b)unsigned short",
  "option3":"c)float",
  "option4":"d)double",
  "ansid":2
}
]
questions1 =[
  {"que"  : "1. Which is valid C expression?" ,
  "option1":"a)int my_num = 100,000", 
  "option2":" b)int my_num = 100000",
  "option3":" c)int my num = 1000",
  "option4":"d)none of these",
   "ansid":2},
  {"que"  : "2. Which of the following is not a valid variable name declaration?" ,
  "option1":"a)float PI=3.14", 
  "option2":" b)double PI=3.14",
  "option3":" c)int PI=3.14",
  "option4":"d) #define PI 3.14",
   "ansid":4
  },
  {"que":"3.The format identifier ‘%i’ is also used for?",
  "option1":"a)int",
  "option2":"b)char",
  "option3":"c)float",
  "option4":"d)double",
  "ansid":2
}
]
  questions = [
    {"id": 1,  "que"  : " Which of the following is not a valid variable name declaration?" ,
    "option1":"a)int __a3", 
    "option2":" b) int __3a",
    "option3":" c) int __A3",
    "option4":"d)none of these",
     "ansid":4},
    {"id": 2,  "que"  : " Which of the following is not a valid variable name declaration?",
    "option1":"a)int __a3", 
    "option2":" b) int a_3",
    "option3":" c) int 3_a",
    "option4":"d)int _3a",
     "ansid":3},
    {"id": 3,  "que"  : "Which data type is most suitable for storing a number 65000 in a 32-bit system?",
    "option1":"a)signed short", 
    "option2":" b)unsigned short",
    "option3":" c) long",
    "option4":"d)int",
     "ansid":2}
 ];
 public questionId;
 ngOnInit() {
  this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
  this.questionId = id; 
  this.route.paramMap.subscribe((params: ParamMap) => {
    let i = parseInt(params.get('id'));
    this.questionId = i;
  })
}
public c=0;
 check(q1, q2,q3) {
   if ( q1 == q2) {
     this.sum = this.sum + 1;
     this.c=this.c+1;
    console.log("sum,c",this.sum,this.c) 
   }
   else
   {
     if((this.c>=1)&&(this.sum>=0))
     {
       this.sum=this.sum-1;
       this.c=0;
       console.log("sum1,c",this.sum, this.c);
     }

       this.c=0;
     
   }
 }
 onsubmit(){

  this.router.navigate(['/computer', this.sum]);
 }
}
