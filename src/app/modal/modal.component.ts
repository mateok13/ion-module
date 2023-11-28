import { Component } from '@angular/core';
import { IonInput, IonToolbar, IonHeader, IonNav, IonTitle, IonContent, IonButtons, 
  IonButton, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  standalone: true,
  imports: [IonInput, IonToolbar, IonHeader, IonNav, IonTitle, IonContent, IonIcon, 
    IonButtons, IonButton, IonList, IonItem, FormsModule, IonItemSliding, IonItemOptions, IonItemOption],
})
export class ModalComponent {
  name: string = "";

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  addTask() {
    return this.modalCtrl.dismiss(this.name, 'add');
  }
}