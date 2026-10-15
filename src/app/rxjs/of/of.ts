import { Component, signal } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  imports: [],
  templateUrl: './of.html',
  styleUrl: './of.css',
})
export class Of {
  myObservable$ = of(5,10,15);
  myNum = signal<any[]>([]);
  constructor(){
    this.myObservable$.subscribe((res:any)=> {
      console.log(res)
      this.myNum.update(data => [...data, res]);
    });
  }
}
