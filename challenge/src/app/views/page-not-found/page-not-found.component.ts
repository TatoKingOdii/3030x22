import { Component, OnInit } from '@angular/core';
import {IonContent, IonFooter, IonHeader, IonText} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "../shared/footer-bar/footer-bar.component";

@Component({
  selector: 'app-page-not-found',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    NavBarComponent,
    FooterBarComponent,
    IonFooter,
    IonContent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone: true
})
export class PageNotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
