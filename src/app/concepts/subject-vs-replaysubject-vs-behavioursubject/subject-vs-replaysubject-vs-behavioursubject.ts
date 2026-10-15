import { Component, signal  } from '@angular/core';
import {Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subject-vs-replaysubject-vs-behavioursubject',
  imports: [],
  templateUrl: './subject-vs-replaysubject-vs-behavioursubject.html',
  styleUrl: './subject-vs-replaysubject-vs-behavioursubject.css',
})
export class SubjectVsReplaysubjectVsBehavioursubject {
  myData = signal<any[]>([]);
  // myObservable$ = new Subject();
  // myObservable$ = new ReplaySubject(2); // keep last 2 values in memory
  myObservable$ = new BehaviorSubject(1212); // default value
 
  onCreate(){
    // this.myObservable$.next(1)
    console.log(1)
    setTimeout(()=>{
      console.log(2)
      this.myObservable$.next(2)
    },3000)
    setTimeout(()=>{
      console.log(3)
      this.myObservable$.next(3)},6000)
    setTimeout(()=>{
      console.log(4)
      this.myObservable$.next(4)},9000)
    setTimeout(()=>{
      console.log(5)
      this.myObservable$.next(5)},12000)
  }
  onSubscribe(){
    console.log("Subscribed")
    this.myObservable$.subscribe((data:any)=>{
      this.myData.update(current => [...current, data]);
      console.log("Subscribed Data : ", this.myData())
      
    })
  }
}
