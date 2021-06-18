import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, filter, map, max, multicast, take } from 'rxjs/operators';
import { from, of, interval, Observable, Subscription, timer, merge, Subject, observable, ConnectableObservable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  status = "";
  tab: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    // const tableau = [1, 2, 3];
    const tab: Array<number> = [1,2, 3, 4, 5];
    const observable: Observable<number> = from(tab);
    const subject = new Subject<number>();
    const multicasted = observable.pipe(multicast(subject)) as
      ConnectableObservable<number>;

    multicasted.subscribe({
      next: (value) => console.log(`first : ${value}`)
    });
    multicasted.subscribe({
      next: (value) => console.log(`second : ${value}`)
    });
    multicasted.connect();

    // const observable2:Observable<number> = of(4,5,6);

    // const observable = merge(observable1, observable2)

    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = error;
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // );

    // const subject = new Subject<number>();
    // subject.subscribe({
    //   next: (value)=>console.log(`A: ${value}`)
    // });
    // subject.subscribe({
    //   next: (value)=>console.log(`B: ${value}`)
    // });
    // observable.subscribe(subject);
    // subject.next(1);
    // subject.next(2)

    const subjet = new BehaviorSubject(0);
    subjet.subscribe({next:(value)=>console.log(`A: ${value}`)});
    subjet.next(1);
    subjet.next(2);

     subjet.subscribe({next:(value)=>console.log(`B: ${value}`)});
     subjet.next(3);

    
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  

}


