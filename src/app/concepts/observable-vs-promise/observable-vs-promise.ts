import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-vs-promise',
  imports: [],
  templateUrl: './observable-vs-promise.html',
  styleUrl: './observable-vs-promise.css',
})
export class ObservableVsPromise {
  myObserv$: any;
  myProm$: any;
  mySubscription = new Subscription();
  onCreate() {
    this.myObserv$ = new Observable<string>(observer => {
      console.log("Observable created");
      // observer.next("Observable emitted1");
      // observer.next("Observable emitted2");
      // observer.next("Observable emitted3");
       setInterval(() => {
          observer.next("Observable emitted");
      }, 1000)
    });
    this.myProm$ = new Promise<string>(resolve => {
      console.log("Promise created");
      // resolve("Promise emitted1");
      // resolve("Promise emitted2");
      // resolve("Promise emitted3");
      setInterval(() => {
        resolve("Promise emitted");
      }, 1000)
    });





  }
  onExecute() {
    this.mySubscription =  this.myObserv$.subscribe((data: any) => {
      console.log(data)
    })

    this.myProm$.then((data: any) => {
      console.log(data)
    })
  }
  onCancel() { 
    this.mySubscription.unsubscribe()
  }
}
