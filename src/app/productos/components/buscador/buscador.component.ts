import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  filterForm!: FormGroup;
  filteredProducts = [];

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}
}
