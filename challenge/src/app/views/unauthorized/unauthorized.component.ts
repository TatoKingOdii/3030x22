import { Component, OnInit } from '@angular/core';
import {IonContent, IonFooter, IonHeader, IonText, IonTitle} from "@ionic/angular/standalone"
import {RouterLink} from "@angular/router";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "../shared/footer-bar/footer-bar.component";

@Component({
  selector: 'app-unauthorized',
  imports: [
    IonContent,
    IonText,
    IonTitle,
    RouterLink,
    NavBarComponent,
    IonHeader,
    FooterBarComponent,
    IonFooter
  ],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  standalone: true
})
export class UnauthorizedComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
