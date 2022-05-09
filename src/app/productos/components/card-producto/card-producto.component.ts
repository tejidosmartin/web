import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() producto!: Producto

  constructor() { }

  ngOnInit(): void {
  }

}
