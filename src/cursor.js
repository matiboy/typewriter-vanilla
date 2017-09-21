import {Observable} from 'rxjs/Observable'

export default (pattern = [200, 800, 400, 800, 200], character = '|', empty = '') => Observable.of(empty)
  .concat(
    Observable.from(pattern)
    .concatMap(
      (duration, index) => {
        return Observable.timer(duration).map(() => index % 2 ? empty : character)
      }
    // Avoid having an extra "|" character since we have a start
    ).take(pattern.length - 1)
  )
