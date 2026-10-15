import { Component } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-pipe',
  imports: [],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {

  myObservable$ = of(1, 2, 3, 4, 5);

  constructor() {
    this.myObservable$.pipe(
      //Add 10
      map(val => val + 10)
    ).subscribe((res: any) => console.log(res));

  }

}
