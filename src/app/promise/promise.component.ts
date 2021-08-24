import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  isDellAvailable(){
     return false;
  }
  isHpAvailable(){
    return true;
  }
  status:any;
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject)=>{
      if(this.isDellAvailable()){
        return setTimeout(() => {
          resolve('Purchase the Dell');
        }, 3000);
      }
      else if(this.isHpAvailable()){
        return setTimeout(() => {
          resolve('Purchase the HP');
        }, 3000);
      }
      else{
        return setTimeout(() => {
          reject("Both of them is not available");
        }, 3000);
      }
    });

    buyLaptop.then((res)=>{
      console.log("Coming from then code",res);
      this.status = res;
    }).catch((res)=>{
      console.log("Rejected",res);
      this.status = res;
    });
  }

  

  

}
