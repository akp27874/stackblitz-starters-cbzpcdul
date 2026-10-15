import { Component } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  numbers$ = of(1, 2, 3, 4, 5);
  processNumber$ = this.numbers$.pipe(
    // Allow even number
    filter(val => val % 2 === 0),

    // Multiply by 10
    map(val => val * 10)
  )

  constructor() {
    this.processNumber$.subscribe((res: any) => console.log(res));
  }
}
