import { catchError, debounceTime, distinctUntilChanged, EMPTY, filter, map, mergeMap, OperatorFunction, pipe, retry, switchMap } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreater: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        filter(searchParam => searchParam.length >= 3),
        distinctUntilChanged(),
        map(searchParam => ({
            ...requestConfig,
            url: urlCreater(searchParam),
        })),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                delay: 2000,
            }),
            catchError(() => EMPTY),
        )),
    )
}