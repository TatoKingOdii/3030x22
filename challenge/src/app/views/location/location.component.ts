import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent, IonFooter,
  IonGrid, IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonRow
} from "@ionic/angular/standalone";
import {LocationListComponent} from "./location-list/location-list.component";
import {LocationEditModalComponent} from "./modals/location-edit-modal/location-edit-modal.component";
import {LocationFacade} from "../../state/location/location.facade";
import {AsyncPipe} from "@angular/common";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "../shared/footer-bar/footer-bar.component";

@Component({
  selector: 'app-location',
  imports: [
    IonList,
    IonGrid,
    IonRow,
    IonItem,
    IonLabel,
    IonCol,
    IonContent,
    IonCard,
    IonButton,
    LocationListComponent,
    LocationEditModalComponent,
    AsyncPipe,
    IonHeader,
    NavBarComponent,
    FooterBarComponent,
    IonFooter
  ],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true
})
export class LocationComponent implements OnInit {

  constructor(protected locationFacade: LocationFacade) { }

  ngOnInit() {
    this.locationFacade.loadLocations();
  }
}
