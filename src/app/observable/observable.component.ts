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
import { debounceTime, filter, from, fromEvent, interval, map, mergeMap, Observable, of, Subscription, switchMap } from 'rxjs';

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

    this.operatorExplain();
  }

  ngOnDestroy(): void {
    // this.firstObSubscription.unsubscribe();
  }


  /**
   * What is RxJS?
   * RxJS (Reactive Extensions for JavaScript) is a library for reactive programming.
   * It uses the concept of Observables to handle asynchronous data streams (like user input, API calls, WebSocket messages, timers).
   * Instead of handling async events with callbacks or Promises, RxJS lets you create a data stream and apply operators to transform, filter, combine, or react to it.
   * In Angular, RxJS is heavily used with HttpClient, Forms, and Event streams.
   
   
  * Core Concepts
  * Observable → A stream of data/events over time (can emit multiple values).
  * Observer → Consumes the values emitted by Observable.
  * Operators → Functions that transform or filter the data stream.
  * Subscription → The act of listening to an Observable.
  * Subject → An Observable + Observer (used for multicasting).
  
  * Popular RxJS Operators (Methods)
   */

  // map
  operatorExplain() {
    /**
     * What is pipe() in RxJS?
     * pipe() is a function that lets you chain RxJS operators together.
     * Operators (like map, filter, switchMap, debounceTime, etc.) are just functions that take an Observable, process it, and return a new Observable.
     * Instead of nesting operators one inside another, RxJS provides pipe() for clean, readable code.
     
     observable$
    .pipe(
      operator1(),
      operator2(),
      operator3()
    )
    .subscribe(observer);
     */

    // map - Transforms each emitted value.
    from([1, 2, 3])
      .pipe(map(x => x * 2))
      .subscribe(val => console.log(val));

    // filter - Only lets values that meet a condition pass.
    from([1, 2, 3, 4, 5])
      .pipe(filter(x => x % 2 === 0))
      .subscribe(val => console.log(val));
    // Output: 2, 4

    // mergeMap - Good for handling nested async calls (e.g., API inside API).
    of('User')
      .pipe(mergeMap(name => of(`Hello ${name}`)))
      .subscribe(val => console.log(val));
    // Output: Hello User

    // switchMap - Switch to Latest Observable
    // Most popular in Angular for HTTP calls
    // Cancels previous request if a new one comes before completion.
    // Very useful for search bars, autocomplete, live data.

    // Example: search input that cancels previous request
    fromEvent((<any>window).document.getElementById('searchBox'), 'input')
      .pipe(
        switchMap(() => of('API Response...'))
      )
      .subscribe(val => console.log(val));

    // debounceTime - Delay Emissions
    // Ignores values for a set time before emitting → helps prevent too many API calls.
    fromEvent(document, 'click')
      .pipe(debounceTime(1000))
      .subscribe(() => console.log('Clicked after 1s pause'));
  }
}
