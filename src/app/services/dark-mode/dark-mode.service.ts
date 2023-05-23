import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
 private myTheme: BehaviorSubject<string> = new BehaviorSubject<string>("light");
  constructor() { }
  public getTheme(): Observable<string>{
    return this.myTheme.asObservable();
  }
  public setTheme(value: string):void{
    this.myTheme.next(value);
  }

}
