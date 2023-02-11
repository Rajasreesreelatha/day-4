import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-singledist',
  templateUrl: './singledist.component.html',
  styleUrls: ['./singledist.component.css']
})
export class SingledistComponent {
  single:any;
  constructor(private hero: HeroService){}
  ngOnInit():void{
    let id:any=localStorage.getItem('id')
    let singleDataArray=this.hero.getData()
    console.log(singleDataArray);
    this.single=singleDataArray.filter( e=>e.district===id)
    console.log(this.single)
  }

}
