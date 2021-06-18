import { Component, OnInit } from '@angular/core';
import { filter, map, take } from 'rxjs/operators'
import { BehaviorSubject, Observable, Observer, ReplaySubject, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  subject = new ReplaySubject<number>(2);
  tab: number[] = [];
  status = '';
  constructor() { }

  ngOnInit(): void {
    // const observable: Observable<number> = timer(3000, 1000);
    // const observer: Observer<number> = {
    //   next: (value) => {
    //     this.tab.push(value);
    //   },
    //   error: (error) => {
    //     this.status = error;
    //   },
    //   complete: () => {
    //     this.status = 'fini';
    //   }
    // };
    //observable.subscribe(observer);

    const observable: Observable<number> = timer(3000, 1000).pipe(
      take(10),
      map(elt => elt + 3),
      filter(elt => elt % 2 == 0))
      observable.subscribe(this.subject)
    observable.subscribe({
      next: (value) => {
        this.tab.push(value);
      },
      error: (error) => {
        this.status = error;
      },
      complete: () => {
        this.status = 'fini';
      }
    });
    

    // const subject = new Subject<number>();

    // subject.subscribe({
    //   next: (value) => console.log(`A : ${ value }`)
    // });
    // subject.subscribe({
    //   next: (value) => console.log(`B : ${ value }`)
    // });
    // subject.next(1);
    // subject.next(2);

    // const subject = new BehaviorSubject(0);
    // subject.subscribe({
    //   next: (value) => console.log(`A : ${ value }`)
    // });
    // subject.next(1);
    // subject.next(2);
    // subject.subscribe({
    //   next: (value) => console.log(`B : ${ value }`)
    // });
    // subject.next(3);

    
    this.subject.next(0);
    this.subject.subscribe({
      next: (value) => console.log(`A : ${ value }`)
    });
    this.subject.next(1);
    this.subject.next(2);
    this.subject.subscribe({
      next: (value) => console.log(`B : ${ value }`)
    });
    this.subject.next(3);
  }

}


