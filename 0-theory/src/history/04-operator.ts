// import { filter, interval, Observable, OperatorFunction, Subscriber } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // function filterStreamValue<T>(filterCb: (value: T) => boolean): (source$: Observable<T>) => Observable<T> {
// function filterStreamValue<T>(filterCb: (value: T) => boolean): OperatorFunction<T, T> {
//     // return (source$: Observable<T>): Observable<T> => new Observable<T>(subscriber => {
//     //     const subscription = source$.subscribe({
//     //         next: value => {
//     //             if (filterCb(value)) {
//     //                 subscriber.next(value);
//     //             }
//     //         },
//     //         complete: () => {
//     //             subscriber.complete();
//     //         },
//     //         error: error => {
//     //             subscriber.error(error);
//     //         },
//     //     });

//     //     // return () => {
//     //     //     subscription.unsubscribe();
//     //     // };
//     //     // return {
//     //     //     unsubscribe: () => {
//     //     //         subscription.unsubscribe();
//     //     //     }
//     //     // };
//     //     return subscription;
//     // });
//     return (source$: Observable<T>): Observable<T> => new Observable<T>(subscriber => source$.subscribe({
//         next: value => {
//             if (filterCb(value)) {
//                 subscriber.next(value);
//             }
//         },
//         complete: () => {
//             subscriber.complete();
//         },
//         error: error => {
//             subscriber.error(error);
//         },
//     }));
// };

// const stream$ = interval(500);
// const filterStreamByEvenNumber = filterStreamValue<number>(value => value % 2 === 0)
// // const filterStreamByEvenNumber = filter<number>(value => value % 2 === 0)

// filterStreamByEvenNumber(stream$).subscribe(terminalLog);

// // function stub() {
// //     return (_: Observable<unknown>) => new Observable(subscriber => {
// //         subscriber.next('stub');
// //         subscriber.complete();
// //     });
// // }
