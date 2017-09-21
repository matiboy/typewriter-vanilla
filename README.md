# Typewriter Vanilla

Typewriter effect that can be applied to any DOM element.
Uses RxJS.  
The main purpose is actually to focus on the "text" logic, so it can be reused in any form of React, React-Native, Angular, Vue.js, jQuery plugin, Web components; or simply in vanilla JS

## Features

* Pure logic available as an observable
* Start/stop
* Typing speed (randomized within a range if you choose to do so)
* "Pattern" for caret blink between sentences

## Process
1. `npm install typewriter_vanilla`
2. Add to a HTML file with a simple `<script>` tag (UMD), or use it in a webpack/browserify/commonjs context
3. Add it to an element using

```js
var typewriterInstance = window.typewriter_vanilla.input(document.getElementsByTagName('input')[0], [
    'hello world',
    'something s cooking',
    'it smells of vanilla'
  ], {autoStart: true})
typewriterInstance.stop()
typewriterInstance.start()
typewriterInstance.clear()
```

4. You can also simply subscribe to the observable `typewriterInstance.text$`

## Logic only

You can easily use any of the existing modules:

* randomTimer(min, max): build a timer observable that will emit at random times between min/max each time; emits increasing numbers
* word(sentence, min, max): Observable which emits the letters of the sentence using a random timer as above
* cursor(pattern=[200,700,300], character='|', empty=''): Observable which emits first `empty` then 200ms later, emits `character` and leaves it there for 700ms, then blank for 300ms. Change the pattern to keep "blinking"
* typewriter(words, characterOptions, cursorOptions): the full observable; a concatenation of a "word" observable followed by a "cursor" observable for each word in words