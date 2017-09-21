import {Observable} from 'rxjs/Observable'
import random from 'lodash/random'

// Creates an observable that emits at random times between min and max ms
export default ({min, max = min}) => {
  let i = 0

  return Observable.of('')
  .switchMap(
    () => Observable.timer(random(min, max))
  )
  .repeat()
  .map(_ => i++)
}
