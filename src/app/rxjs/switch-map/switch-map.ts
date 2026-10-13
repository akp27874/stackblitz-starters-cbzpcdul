import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  imports: [ReactiveFormsModule],
  templateUrl: './switch-map.html',
  styleUrl: './switch-map.css',
})
export class SwitchMap {
searchControl : FormControl = new FormControl();
http = inject(HttpClient)
constructor(){
  // this.searchControl.valueChanges.subscribe((str: any)=>{
  //   console.log(str);
  //   this.http.get("https://dummyjson.com/products/search?q="+str).subscribe((res:any)=>{
  //     console.log(res)
  //   })
  // })



  this.searchControl.valueChanges.pipe(
    switchMap( (search: string) => this.http.get("https://dummyjson.com/products/search?q="+search))
  ).subscribe((res: any)=>{
    console.log(res)
    debugger
  })
}
}
