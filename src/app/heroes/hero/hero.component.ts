import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'IROMAN';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {

    return `${ this.name.toLowerCase() }-${ this.age }`;
  }

  changeHero():void {
   this.name = 'Spiderman';
  }
  changeAge():void {
    this.age = 30;
  }
  resetForm():void {
    this.name = 'Iroman';
    this.age = 45;

    // document.querySelectorAll('h1').forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
