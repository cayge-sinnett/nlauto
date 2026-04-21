
import suitelet from './suitelet/-main'
import mapReduce from './mapReduce/-main'
import userEvent from './userEvent/-main'

export default interface entrypoints {
  'suitelet': suitelet
  'mapReduce': mapReduce
  'userEvent': userEvent
}
