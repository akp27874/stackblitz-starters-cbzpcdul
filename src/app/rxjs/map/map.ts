import { Component } from '@angular/core';
import { of, map } from 'rxjs';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {

  constructor() {
    of(1, 2, 3, 4, 5).pipe(
      map(item => item * 10)
    ).subscribe((res: any) => console.log(res));
  }
}
