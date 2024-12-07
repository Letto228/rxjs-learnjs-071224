// import { Subject } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// Subject = Observable + Observer

// const stream$ = new ...Subject<number>();

// *****************
// Subject<number>()

// `Subject` просто ретранслирует данные своим подписчикам.
//  Подмечу, что он отправляет данные только существующим подписчикам,
//  те подписчики что создадутся после отправки данных - не получат данные которые были отправлены ДО
// *****************

//     --------1--------2--------3--------4--------5---

// s1: --------1--------2--------3--------4--------5---

// s2:                      -----3--------4--------5---

// s3:                             -------4--------5---

// ***************************
// BehaviourSubject<number>(0)

// Хранит последнее значение(кэш) - при подписке `subscribe` всегда получит последенее значение из сабжекта,
// даже если подписка произошла после отправки значения в поток.

// При инициализации можно указать страртовое значение.

// `BehaviorSubject` может отдавать синхронное значение (`.value`)
// ***************************

//     0--------1--------2--------3--------4--------5--

// s1: 0--------1--------2--------3--------4--------5--

// s2:    0-----1--------2--------3--------4--------5--

// s3:                      2-----3--------4--------5--

// ***********************
// ReplaySubject<number>()

// Хранит N значений(кэш) - если в `BehaviorSubject` кэш был последним один - последнее значение,
// то в `ReplaySubject` есть возможность закэшировать большое кол-во значений. 
// ***********************

//     --------1--------2--------3--------4--------5---

// s1: --------1--------2--------3--------4--------5---

// s2:                    (12)---3--------4--------5---

// s3:                             (123)--4--------5---

// ************************
// ReplaySubject<number>(2)

// Данное кол-во указывается при создании `ReplaySubject` - в констркторе
// ************************

//     --------1--------2--------3--------4--------5---

// s1: --------1--------2--------3--------4--------5---

// s2:                    (12)---3--------4--------5---

// s3:                              (23)--4--------5---

// ************************
// ReplaySubject<number>(2, 16000)

// Так же может хранить кэш по времени - второй аргумент конструктора
// (по истечении времени у значения - оно удаляется из кэша)

// `ReplaySubject(2, 16000)` - хранить макс 2 значения которые не старше 16сек
// ************************

//     --------1--------2----------------4--------5---

// s1: --------1--------2----------------4--------5---

// s2:                    (12)-----------4--------5---

// s3:                              (2)--4--------5---

// ***********************
// AsyncSubject<number>()

// В потоке отправляет значение только после совершения комплита,
// значение отправляется то, которое было в сабжекте непосредственно перед комплитом.
// Если же комплита сабжекта и вовсе не было - значения в потоке приходить не будут
// ***********************

//     --------1--------2--------3--------4--------5-|

// s1: ----------------------------------------------5

// s2:                    ---------------------------5

// s3:                             ------------------5

// ----------------------------------------------------------------------

// let count = 0;

// const subject$ = new Subject<number>();

// setInterval(() => {
//     subject$.next(count);

//     count += 1;
// }, 1000);

// terminalLog(`Created: Subscribe 1`)
// subject$.subscribe(value => {
//     terminalLog(`Subscribe 1: ${value}`);
// });

// setTimeout(() => {
//     terminalLog(`Created: Subscribe 2`)
//     subject$.subscribe(value => {
//         terminalLog(`Subscribe 2: ${value}`);
//     });
// }, 2000)

// setTimeout(() => {
//     terminalLog(`Created: Subscribe 3`)
//     subject$.subscribe(value => {
//         terminalLog(`Subscribe 3: ${value}`);
//     });
// }, 8000)
