// import { catchError, EMPTY, NEVER, Observable, of, retry, tap, throwError, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const streamWithError$ = new Observable<number>(subscriber => {
//     subscriber.next(1);
//     subscriber.next(10);
//     subscriber.error(new Error('Alarm'));
// });

// // ------------subscripe------------

// // streamWithError$.subscribe({
// //     next: terminalLog,
// //     error: terminalLog,
// // })

// // ------------tap------------

// // streamWithError$.pipe(
// //     tap({
// //         next: terminalLog,
// //         error: terminalLog,
// //     }),
// // ).subscribe();

// // ------------catchError------------

// streamWithError$.pipe(
//     retry({
//         count: 3,
//         // delay: 3000,
//         delay: (error, retryCount) => timer(1000 * retryCount),
//         resetOnSuccess: true,
//     }),
//     catchError(error => {
//         console.log(error);

//         return EMPTY; // |
//         // return NEVER; // ------------------------...
//         // return throwError(() => error); // #
//     }),
// ).subscribe({
//     next: terminalLog,
//     complete: () => {
//         terminalLog('Completed');
//     }
// });
