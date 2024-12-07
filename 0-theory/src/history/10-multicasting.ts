// import { BehaviorSubject, Observable, share, Subject, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = new Observable<number>(subscriber => {
//     console.log('Start');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('Increment', count);

//         subscriber.next(count);

//         // if (count === 3) {
//         //     subscriber.complete();
//         // }
//     }, 1000);

//     return () => {
//         console.log('Destroy');

//         clearInterval(intervalId);
//     };
// });

// const hotStream$ = stream$.pipe(
//     share({
//         connector: () => new BehaviorSubject(0),
//         // resetOnComplete: false,
//         // resetOnError: true,
//         resetOnRefCountZero: false,
//     }),
//     // shareReplay(),
// )

// // hotStream$.subscribe(value => {
// //     terminalLog(`Subscribe 1: ${value}`);
// // });

// let subscription = new Subscription();

// setTimeout(() => {
//     subscription = hotStream$.subscribe(value => {
//         terminalLog(`Subscribe 2: ${value}`);
//     });
// }, 4000)

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 6000);

// setTimeout(() => {
//     hotStream$.subscribe(value => {
//         terminalLog(`Subscribe 3: ${value}`);
//     });
// }, 8000)
