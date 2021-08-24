import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(count:any, countainer:string){
    let el = document.createElement('li');
    el.innerText = count;
    document.getElementById(countainer)?.appendChild(el);
  }

}
