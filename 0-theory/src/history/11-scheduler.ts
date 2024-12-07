// import { asapScheduler, asyncScheduler, BehaviorSubject, combineLatest, from, interval, Observable, observeOn, of, scheduled, share, Subject, subscribeOn, Subscription, tap } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// console.log('Start');

// from(Array.from({length: 10}, (_, index) => index)).subscribe(console.log);

// console.log('End');

// ---------------------------------------------------------------------------

// console.log('Start');

// interval(1000).subscribe(console.log);

// console.log('End');

// ---------------------------------------------------------------------------

// console.log('Start');

// from(
//     Array.from({length: 10}, (_, index) => index),
//     // asyncScheduler,
//     asapScheduler,
// ).subscribe(console.log);

// scheduled(
//     Array.from({length: 10}, (_, index) => index),
//     // asyncScheduler,
//     asapScheduler,
// ).subscribe(console.log);

// console.log('End');

// ---------------------------------------------------------------------------

// from(Array.from({length: 10}, (_, index) => index))
//     .pipe(
//         tap(() => {
//             console.log('default scheduler');
//         }),
//         observeOn(asyncScheduler),
//         tap(() => {
//             console.log('before observeOn scheduler');
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(value => {
//         console.log(`async - ${value}`);
//     });

// of(1, 2, 3).subscribe(value => {
//     console.log(`sync - ${value}`);
// });

// ---------------------------------------------------------------------------

// const sequence1$ = of(1, 2);
// const sequence1$ = scheduled([1, 2], asyncScheduler);
// const sequence2$ = of(10);

// combineLatest([
//     sequence1$,
//     sequence2$,
// ]).subscribe(console.log);

// ---------------------------------------------------------------------------
