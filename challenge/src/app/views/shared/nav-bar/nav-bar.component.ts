import {Component, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {AuthFacade} from "../../../state/auth/auth.facade";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonTitle,
    IonButton,
    AsyncPipe,
    RouterLink,
    IonButtons,
    IonContent

  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true
})
export class NavBarComponent  implements OnInit {

  constructor(protected authFacade: AuthFacade) { }

  ngOnInit() {}

}
