import { Component, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";
import {IonText, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer-bar',
  imports: [
    NgIf,
    IonText,
    IonToolbar
  ],
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss'],
  standalone: true
})
export class FooterBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
