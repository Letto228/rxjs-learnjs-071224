// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const ws = new WebSocket('ws://localhost:8081');

// ws.addEventListener('open', () => {
//     ws.send('on');
// });

// const wsMessage$ = new Observable<number>(subscriber => {
//     console.log('Start');

//     function messageListener({data}: MessageEvent<number>) {
//         console.log('New data', data);

//         subscriber.next(data);
//     }

//     function errorListener(error: Event) {
//         subscriber.error(error);
//     }

//     function closeListener() {
//         subscriber.complete();
//     }

//     ws.addEventListener('message', messageListener);
//     ws.addEventListener('error', errorListener);
//     ws.addEventListener('close', closeListener);

//     return () => {
//         console.log('Destroy');

//         ws.removeEventListener('message', messageListener);
//         ws.removeEventListener('error', errorListener);
//         ws.removeEventListener('close', closeListener);
//     }
// });

// wsMessage$.subscribe(value => {
//     terminalLog(`subscription ${value}`);
// })

// setTimeout(() => {
//     wsMessage$.subscribe(value => {
//         terminalLog(`Timeout subscription ${value}`);
//     })
// }, 5000)
