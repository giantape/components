import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Konstantin', department: 'IT', oppacity: 'Software Developer', active: true},
    { name: 'Gesang', department: 'IT', oppacity: 'Software Developer', active: true},
    { name: 'Denes', department: 'Sales', oppacity: 'Head of Sales', active: false},
  ]

  headers = [
    { key: 'active', label: 'Active' },
    { key: 'name', label: 'Name'},
    { key: 'department', label: 'Department'},
    { key: 'oppacity', label: 'Oppacity'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
