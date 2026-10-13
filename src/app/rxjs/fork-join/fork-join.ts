import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  imports: [],
  templateUrl: './fork-join.html',
  styleUrl: './fork-join.css',
})
export class ForkJoin {
  http = inject(HttpClient);
  constructor(){
    const users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
    const posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");

    forkJoin([users$, posts$]).pipe().subscribe((res:any)=>{
      console.log(res);
      debugger;
    },err =>{
      console.log(err);
      debugger;
    } )
  }
}
