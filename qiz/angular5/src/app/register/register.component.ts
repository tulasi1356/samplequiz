import { Component, OnInit, Renderer2 } from '@angular/core';
import {Router} from '@angular/router';
import {Register} from '../register';
import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 submit = [ {' submitopt': ' submit'}];
 public reg = new Register('', '');
  constructor(private router: Router, private renderer: Renderer2) {
     }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  }
  onselect() {
    this.router.navigate(['/quiz', this.submit]);
    this.renderer.setStyle(document.body, 'background-color', '#ff9800');
  }
  more(){
    this.router.navigate(['/more']);
  }
}
