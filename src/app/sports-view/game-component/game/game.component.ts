import { Component, Input, OnInit } from '@angular/core';
import { game } from '../../Item/game';
import { post } from '../../Item/post';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() post:any;

  constructor() { }

  ngOnInit(): void {
  }

}
