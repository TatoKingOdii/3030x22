import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader,
  IonIcon, IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonText, IonTitle, IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {addIcons} from 'ionicons';
import {addCircle, pencilOutline, trashOutline} from 'ionicons/icons';
import {DEFAULT_LOCATION, Loc} from "../../../types/loc";
import {LocationEditModalComponent} from "../modals/location-edit-modal/location-edit-modal.component";
import {LocationFacade} from "../../../state/location/location.facade";

@Component({
  selector: 'app-location-list',
  imports: [
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonText,
    IonIcon,
    IonModal,
    IonContent,
    IonInput,
    IonCard,
    IonHeader,
    IonFooter,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonCardHeader,
    IonCardTitle
  ],
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  standalone: true
})
export class LocationListComponent  implements OnInit {

  @Input() locations: Loc[] | null = []
  @Input() loadingLocations: boolean | null = false;

  constructor(private modalCtrl: ModalController, protected locationFacade: LocationFacade) {
    addIcons({addCircle, pencilOutline, trashOutline});
  }

  ngOnInit() {}

  async openModal(idx: number | null) {
    console.log('Open Idx: ' + idx);
    const modal = await this.modalCtrl.create({
      component: LocationEditModalComponent,
      componentProps: {
        location: idx != null && this.locations ? this.locations[idx] : DEFAULT_LOCATION
      }
    });
    return modal.present();
  }

  deleteLocation(idx: number) {
    if (this.locations) {
      this.locationFacade.deleteLocation(this.locations[idx]);
    }
  }
}
