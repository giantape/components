import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value: 22, label: "Number of Users",},
    {value: 900, label: "Reveneu"},
    {value: 12, label: "Reviews"}
  ];

  items = [
    {img: '/assets/images/nasi-goreng.jpg', title: 'Nasi Goreng', description: 'Super einfache gericht und dennoch lecker schmecken', original: "Indonesia"},
    {img: '/assets/images/gudeg.jpg', title: 'Gudeg', description: 'Original Gericht aus Djogja und wahnsinnig Himlisch', original: "Djogja"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
