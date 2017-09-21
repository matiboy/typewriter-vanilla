
document.addEventListener('DOMContentLoaded', function() {
  window.typewriterInstance = window.typewriter_vanilla.input(document.getElementsByTagName('input')[0], [
    'hello world',
    'something s cooking',
    'it smells of vanilla'
  ], {autoStart: true})
})