import { Component, OnInit ,Renderer2} from '@angular/core';
import { Router} from '@angular/router';
import{ServiceService} from'../service.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {

  questions = [
     {"id": 1,  "que"  : "set1"},
     {"id": 2,  "que"  : "set2"},
     {"id": 3,  "que"  : "set3"}
  ];
  

  constructor(private router: Router , private renderer: Renderer2,public service1:ServiceService) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  }
  Onselect(question) {
    this.service1.score = 
       this.router.navigate(['/os', question.id]);
  }
}
