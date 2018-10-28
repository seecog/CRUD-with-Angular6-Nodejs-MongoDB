import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudproduct',
  templateUrl: './crudproduct.component.html',
  styleUrls: ['./crudproduct.component.css']
})
export class CrudproductComponent {

  private products: any[] = [
    {
      name: "Apple",
      cost: "200",
      Brand: "Kashmiri Fruits"
    },

    {
      name: "Apple",
      cost: "200",
      Brand: "Kashmiri Fruits"
    }


  ]

  constructor() { }

  ngOnInit() {
  }

}
