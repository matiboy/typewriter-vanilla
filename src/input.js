import typewriter from './typewriter'
import bind from 'lodash/bind'
import noop from 'lodash/noop'

export default (element,
  words,
  {
    writeTo = 'placeholder',
    autoStart = false,
    restartOnBlur = true
  },
  wordOptions,
  characterOptions
) => {
  let text$ = typewriter(words, wordOptions, characterOptions)

  let write = bind(element.setAttribute, element, writeTo)

  let subscription

  let input = {
    // Use parens so we don't return an assignment
    start: () => (subscription = text$.subscribe(text => write(text))),
    stop: () => subscription && subscription.unsubscribe(),
    clear: () => write('')
  }

  if (autoStart) {
    input.start()
  }

  if (restartOnBlur) {
    element.addEventListener('focus', () => (input.stop() || input.clear()))
    element.addEventListener('blur', () => (element.getAttribute('value') ? noop : input.start)())
  }

  return input
}
