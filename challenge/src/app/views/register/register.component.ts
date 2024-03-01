import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader, IonContent,
  IonFooter,
  IonHeader,
  IonInput
} from "@ionic/angular/standalone";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "../shared/footer-bar/footer-bar.component";

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonButton,
    IonHeader,
    NavBarComponent,
    FooterBarComponent,
    IonFooter,
    IonContent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true
})
export class RegisterComponent  implements OnInit {

  // NOT USED YET
  constructor() { }

  ngOnInit() {}

}
