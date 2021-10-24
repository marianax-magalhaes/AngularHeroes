import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(h: Hero): void{
    this.selectedHero = h;
  }

  constructor(private heroService: HeroService) { }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void{
    this.getHeroes();
  }

}
