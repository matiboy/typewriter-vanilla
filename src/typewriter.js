import {Observable} from 'rxjs/Observable'
import cursor from './cursor'
import wordTyping from './word'

export default (words,
  {loop, cursorWhileTyping} = {loop: true, cursorWhileTyping: '|'},
  {cursorCharacter = cursorWhileTyping, cursorPattern} = {}
) => {
  let words$ = Observable.from(words)
    .concatMap(
      word => wordTyping({word})
        // Append the cursor while typing string to the current text
        .map(text => `${text}${cursorWhileTyping}`)
        .concat(
          // Append the cursor to the full word
          cursor().map(text => `${word}${text}`)
        )
    )

  if (loop) {
    words$ = words$.repeat()
  }
  return words$
}
