import { Injectable } from '@angular/core';

interface IModal {
  id: string
  visiable: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }


  isModalOpen(id: string): boolean {
    return !!this.modals.find(element => element.id === id)?.visiable
  }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id === id)
    if (modal) {
      modal.visiable = !modal.visiable
    }
  }

  register(id: string) {
    this.modals.push({ id, visiable: false })
    
  }

  unregister(id: string) {
    this.modals = this.modals.filter(element => element.id !== id)
  }

}
