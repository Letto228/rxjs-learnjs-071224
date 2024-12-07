// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// ------------------Promise------------------

// const sequence = new Promise(resolve => {
//     let count = 0;

//     setInterval(() => {
//         count += 1;

//         resolve(count);
//     }, 1000);
// });

// sequence.then(count => {
//     terminalLog(count);
// });

// setTimeout(() => {
//     sequence.then(count => {
//         terminalLog(count);
//     });
// }, 3000);

// ------------------generators------------------

// const sequence = (function* iteratorFn() {
//     let count = 0;

//     while (true) {
//         count += 1;

//         yield count;
//     }
// })()

// // terminalLog(sequence.next().value);

// setInterval(() => {
//     terminalLog(sequence.next().value);
// }, 1000);

// ------------------ReactiveX------------------

// const sequence = new Observable<number>((subscriber: Subscriber<number>) => {
//     console.log('Start');

//     let count = 0;

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('Increment', count);

//         subscriber.next(count);

//         // if (count === 5) {
//         //     // subscriber.complete();
//         //     subscriber.error(new Error('Unknown error'));
//         // }
//     }, 1000);

//     return () => { // Destroy hook callback
//         console.log('Destroy');

//         clearInterval(intervalId);
//     };
// });

// setTimeout(() => {
//     sequence.subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//     });
// }, 2000);


// const subscription = sequence.subscribe({
//     next: value => {
//         terminalLog(`First ${value}`);
//     },
//     complete: () => {
//         terminalLog('Completed');
//     },
//     error: error => {
//         terminalLog(error);
//     },
// });

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 7000);

// -------

// const allSubscriptions = new Subscription();

// const subscriptionFirst = sequence.subscribe({
//     next: value => {
//         terminalLog(`First ${value}`);
//     },
//     complete: () => {
//         terminalLog('Completed');
//     },
//     error: error => {
//         terminalLog(error);
//     },
// });
// const subscriptionSecond = sequence.subscribe({
//     next: value => {
//         terminalLog(`Second ${value}`);
//     },
//     complete: () => {
//         terminalLog('Completed');
//     },
//     error: error => {
//         terminalLog(error);
//     },
// });

// allSubscriptions.add(subscriptionFirst);
// allSubscriptions.add(subscriptionSecond);

// setTimeout(() => {
//     allSubscriptions.unsubscribe();
// }, 7000);
