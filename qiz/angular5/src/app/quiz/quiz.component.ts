import { Component, OnInit,Renderer2 } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  computer = [ {' computeropt': ' computer'}];
  os = [ {' osop': 'os' }];
  constructor(private router: Router,  private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  }
  onselect(opt) {
    this.router.navigate(['/choose', this.computer]);
  }
  sel(op) {
    this.router.navigate(['/os', this.os]);
  }
  sele(){
    this.router.navigate(['/movie']);
  }
  selec() {
    this.router.navigate(['/face']);
  }
}
