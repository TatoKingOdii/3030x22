import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular/standalone";

@Injectable({
  providedIn: 'root'
})
export class ToastUiService {

  constructor(private toastController: ToastController) { }

  async presentToast(msg: string) {
    const toast = await this.toastController.create(
      {message: msg, duration: 3000, position: 'bottom', color: 'danger'});
    return await toast.present();
  }
}
