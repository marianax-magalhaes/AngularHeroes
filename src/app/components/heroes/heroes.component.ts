import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HEROES } from 'src/app/models/Mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(h: Hero): void{
    this.selectedHero = h;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
