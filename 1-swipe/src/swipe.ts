import { filter, map, Observable, zip } from "rxjs";

function getXPosition(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
        ? event.clientX
        : event.changedTouches.item(0)!.clientX;
}

export function swipe$(
    down$: Observable<MouseEvent>,
    up$: Observable<MouseEvent>,
): Observable<number> {
    return zip(down$, up$).pipe(
        map(([eventDown, eventUp]) => getXPosition(eventDown) - getXPosition(eventUp)),
        filter(diff => Math.abs(diff) > 30),
    );
    // return zip(
    //         down$.pipe(map(getXPosition)),
    //         up$.pipe(map(getXPosition)),
    //     ).pipe(
    //     map(([downPosition, upPosition]) => downPosition - upPosition),
    //     filter(diff => Math.abs(diff) > 30),
    // );
}