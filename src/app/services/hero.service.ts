import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/Hero';
import { HEROES } from '../models/Mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroSevice: fetched heroes')
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}

