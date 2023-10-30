/*
  Rx stands from Reactive programming. It is defined as programming with asynchronous data streams.

  Data Stream - A stream is a data, which arrives over a period of time. The stream of data can be anything. Like variables, user inputs, properties, caches, data structures, and even failures, etc
  */

  /*
  Reactive Programming - The reactive programming is all about creating the stream, emitting value, error or complete signals, manipulate, transfer or do something useful with the data streams.

  This is where the RxJs comes into the picture
  */

  /*
  RxJS - The RxJS (Reactive Extensions Library for JavaScript) is a javascript library, that allows us to work with asynchronous data streams.
  The RxJs has two main players
        1) Observable
        2) Observers ( Subscribers)
  */

  /*
  Observable stream or simple Observable emits the value from the stream asynchronously.
  The observable starts to emit values only when someone subscribes to it
  The observers communicate with the Observable using callbacks
  Observer means subscriber
  The observer must subscribe with the observable to receive the value from the observable. While subscribing it optionally passes the three callbacks. next(), error() & complete()

  Read more "https://www.tektutorialshub.com/angular/angular-observable-tutorial-using-rxjs/"

  */

import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  // Observable - Various data sources like (user input) Events, Http requests, Triggered in code...
  
  // Asynchronus task - You don't know when it happen, You don't know how long it take. (Event and Http request is a asynchronus task)

  private firstObSubscription!: Subscription;

  constructor() { }

  obs = new Observable((observer) => { // observer is the listener which is automatically passed by 'rxjs'
    console.log(observer);
    console.log("Observable starts")
    observer.next("1")
    observer.next("2")
    observer.next("3")
    observer.next("4")
    observer.next("5")
  });

  ngOnInit(): void {
    this.obs.subscribe(
      val => { console.log(val) }, //next callback
      error => { console.log("error") }, //error callback
      () => { console.log("Completed") } //complete callback
    );

    // Stop the observable or prevent to memory leak, need to unsubscribe the observable.
    // this.firstObSubscription = interval(1000).subscribe(count => { // Refer Todo-list app for this
      // console.log(count);
    // })
  }

  ngOnDestroy(): void {
    // this.firstObSubscription.unsubscribe();
  }

  
}
