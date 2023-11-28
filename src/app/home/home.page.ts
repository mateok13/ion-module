import { Component } from '@angular/core';
import { IonHeader, IonNav, IonTitle, IonContent, IonButtons, 
  IonButton, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { NgFor, NgClass } from '@angular/common';
import { Task } from './task';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonNav, IonTitle, IonContent, IonIcon, 
    IonButtons, IonButton, IonList, IonItem, NgFor, NgClass, IonItemSliding, IonItemOptions, IonItemOption],
})
export class HomePage {
  tasks: Array<Task> = [];

  constructor(private modalCtrl: ModalController) {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Syrup', status: 'open' },
      { title: 'Pancake Mix', status: 'open' }
    ];
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'add') {
      if (data !== '' && data !== null) {
        this.tasks.push({ title: data, status: 'open' });
      }
    }
  }

  markAsDone(slidingItem: IonItemSliding, task: Task) {
    task.status = 'done';

    setTimeout(() => {
      slidingItem.close();
    }, 1);
  }

  removeTask(slidingItem: IonItemSliding, task: Task) {
    task.status = 'removed';
    let index = this.tasks.indexOf(task);
    if (index != -1) {
      this.tasks.splice(index, 1);
    }

    setTimeout(() => {
      slidingItem.close();
    }, 1);
  }
}
