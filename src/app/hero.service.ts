import { Injectable } from '@angular/core';
import { districtdatabase } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return districtdatabase
  }
}
