import { interval, map, of, take } from "rxjs";
import { TestScheduler } from "rxjs/testing"
import { swipe$ } from "./swipe"

function createStubMouseEvent(clientX: number): MouseEvent {
    return new MouseEvent('mousemove', {clientX});
}

describe('Swipe: Tests block', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('Swipe test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const mosedown$ = cold(
                '-a----------b-----------------------|',
                {
                    a: createStubMouseEvent(30),
                    b: createStubMouseEvent(2),
                }
            );
            const moseup$ = cold(
                '----a----------------------b--------|',
                {
                    a: createStubMouseEvent(20),
                    b: createStubMouseEvent(500),
                }
            );

            const swipeStream$ = swipe$(mosedown$, moseup$);

            const expectedMarbles = '---------------------------b--------|';
            const expectedMarblesValueMap = {
                b: -498,
            };

            expectObservable(swipeStream$).toBe(expectedMarbles, expectedMarblesValueMap);
        });
    });
});
