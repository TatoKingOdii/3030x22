import { Component, OnInit } from '@angular/core';
import {IonContent, IonFooter, IonHeader, IonText} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "../shared/footer-bar/footer-bar.component";

@Component({
  selector: 'app-inactive',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    NavBarComponent,
    FooterBarComponent,
    IonFooter,
    IonContent
  ],
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss'],
  standalone: true
})
export class InactiveComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
