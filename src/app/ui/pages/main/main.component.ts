import { Component, OnInit } from '@angular/core';
import { MOCKCARDHOME } from '../../mock/mock-card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  
  titulo: string = 'Nueva colección';

  cards = MOCKCARDHOME;

  constructor() {}

  ngOnInit(): void {}
}
