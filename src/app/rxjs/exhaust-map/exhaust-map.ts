import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { exhaustMap, Subject } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  imports: [ReactiveFormsModule],
  templateUrl: './exhaust-map.html',
  styleUrl: './exhaust-map.css',
})
export class ExhaustMap {
  loginClick$ = new Subject<void>();
  http = inject(HttpClient);

  constructor(){
    this.loginClick$.pipe(
      exhaustMap(()=>this.http.get("https://jsonplaceholder.typicode.com/users"))
    ).subscribe((res: any)=>{
      console.log(res)
    })
  }

  onlogin(){
   this.loginClick$.next();
  }
}
