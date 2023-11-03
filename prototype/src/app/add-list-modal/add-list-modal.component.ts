import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-list-modal',
  templateUrl: './add-list-modal.component.html',
  styleUrls: ['./add-list-modal.component.scss'],
})
export class AddListModalComponent  implements OnInit {
  
  constructor(public modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }


  ngOnInit() {}

}
