import { Component, OnDestroy, inject } from '@angular/core';
import {combineLatest, interval, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-combine-latest',
  imports: [],
  templateUrl: './combine-latest.html',
  styleUrl: './combine-latest.css',
})
export class CombineLatest implements OnDestroy {

  ofObservable = of(1,2,3,4);
  secondObservable = interval(3000);

  private mySubscription!: Subscription
  http = inject(HttpClient)
  
  constructor(){
    // const users$ = this.http.get("https://jsonplaceholder.typicode.com/usersa");
    // const posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");
    
    //  combineLatest([users$, posts$]).subscribe((res)=>{
    //   console.log(res);
    //   debugger
    // }, (error) =>
    // {
    //   debugger
    //   console.log(error)
    // } )

    this.mySubscription = combineLatest([this.ofObservable, this.secondObservable]).subscribe((res)=>{
      console.log(res);
    })
      
  }

  ngOnDestroy(){
   if(this.mySubscription){
    this.mySubscription.unsubscribe();
   }
  }

}
