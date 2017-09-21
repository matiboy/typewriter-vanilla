import randomTimer from './randomTimer'

export default ({word, min = 100, max}) => randomTimer({min, max})
  .take(word.length)
  .map(x => word.substr(0, x + 1))
