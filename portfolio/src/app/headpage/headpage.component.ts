import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-headpage',
  templateUrl: './headpage.component.html',
  styleUrls: ['./headpage.component.scss'],
})
export class HeadpageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
