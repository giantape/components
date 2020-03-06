import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items = [
    {title: 'was ist das?', content: 'das ist ein Accordion'},
    {title: 'was magst du am liebsten?', content: 'Kochen und essen mache ich sehr gerne'},
    {title: 'wie heiß die mutter von Nici Laudar?', content: 'Mama Laudar, Mama Laudar...'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
