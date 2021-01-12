import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
onsel()
{
  this.router.navigate(['/register']);
}
}
