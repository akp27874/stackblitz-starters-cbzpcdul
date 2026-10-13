import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  imports: [ReactiveFormsModule],
  templateUrl: './concat-map.html',
  styleUrl: './concat-map.css',
})
export class ConcatMap {
sourceControl: FormControl = new FormControl();
http = inject(HttpClient)
constructor() {
  // this.sourceControl.valueChanges.subscribe((str: string ) => {
  //    this.http.get('https://dummyjson.com/products/search?q=' + str).subscribe((res: any)=>{
  //      console.log(res)
  //    })
  //   })

  this.sourceControl.valueChanges.pipe(
    concatMap((search: string)=> this.http.get("https://dummyjson.com/products/search?q="+search))
  ).subscribe((res:any)=>{
    console.log(res)
  })
}
}
