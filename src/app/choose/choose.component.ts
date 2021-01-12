import { Component, OnInit ,Renderer2} from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  questions = [
    {"id": 1,  "que"  : "set1"},
    {"id": 2,  "que"  : "set2"},
    {"id": 3,  "que"  : "set3"}
 ];
  constructor(private router: Router,private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
   }

  ngOnInit() {
  }
  Onselect(question) {
    this.router.navigate(['/choose', question.id]);
}
}
