// import { filter, interval, map, Observable, OperatorFunction, pipe, Subscriber } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(500);

// --------------------------

// const filterEven = filter<number>(value => value % 2 === 0);
// const double = map<number, number>(value => value * 2);

// const filterEvenChildStream$ = filterEven(stream$);
// const doubleChildStream$ = double(filterEvenChildStream$);

// doubleChildStream$.subscribe(terminalLog);

// --------------------------

// const filterEven = filter<number>(value => value % 2 === 0);
// const double = map<number, number>(value => value * 2);

// double(
//     filterEven(stream$)
// ).subscribe(terminalLog);

// --------------------------

// map<number, number>(value => value * 2)(
//     filter<number>(value => value % 2 === 0)(stream$)
// ).subscribe(terminalLog);

// --------------------------

// function pipe(
//     ...operatorFunctions: Array<OperatorFunction<any, any>>
// ): OperatorFunction<unknown, unknown> {
//     return (source$: Observable<unknown>) => operatorFunctions.reduce(
//         (childStream$, operatorFunction) => operatorFunction(childStream$),
//         source$,
//     );
// }

// const resultStream$ = pipe(
//     filter<number>(value => value % 2 === 0),
//     map<number, number>(value => value * 2),
// )(stream$);

// const resultStream$ = stream$.pipe(
//     filter(value => value % 2 === 0),
//     map(value => value * 2),
// );

// resultStream$.subscribe(terminalLog);
