import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddListModalComponent } from '../add-list-modal/add-list-modal.component';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent implements OnInit {

  constructor(public modalController: ModalController) { }
  
  async openModal() {
    const modal = await this.modalController.create({
      component: AddListModalComponent
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
  }



  ngOnInit() {}

}
