import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  imports: [ReactiveFormsModule],
  templateUrl: './merge-map.html',
  styleUrl: './merge-map.css',
})
export class MergeMap {
  searchControl: FormControl = new FormControl();
  http = inject(HttpClient)
  constructor() {
    // this.searchControl.valueChanges.subscribe((str: string) => {
    //   this.http
    //     .get('https://dummyjson.com/products/search?q=' + str)
    //     .subscribe((res: any) => {
    //       console.log(res);
    //     });
    // });

    this.searchControl.valueChanges.pipe(
      mergeMap((search: string)=> this.http.get("https://dummyjson.com/products/search?q="+search))
    ).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
