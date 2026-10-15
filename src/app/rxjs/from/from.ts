import { Component, signal } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  imports: [],
  templateUrl: './from.html',
  styleUrl: './from.css',
})
export class From {
  myObservable$ = from(['Nagpur', 'Raipur', 'Bhopal']);
  cityList = signal<any[]>([]);
  constructor(){
    this.myObservable$.subscribe((res: any)=> {
      console.log(res)
      this.cityList.update(data => [...data, res])
    })
  }

}
