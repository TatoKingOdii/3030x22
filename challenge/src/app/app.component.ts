import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IonApp, IonContent, IonFooter, IonHeader, IonRouterOutlet} from '@ionic/angular/standalone';
import {NavBarComponent} from "./views/shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "./views/shared/footer-bar/footer-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IonApp, IonRouterOutlet, IonFooter, IonHeader, NavBarComponent, FooterBarComponent, IonContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '3030x22';
}
