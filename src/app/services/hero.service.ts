import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../models/Mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{
    return HEROES;
  }

  constructor() { }
}
