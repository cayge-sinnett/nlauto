
import suitelet from './suitelet/-main'
import mapReduce from './mapReduce/-main'
import userEvent from './userEvent/-main'
import schedule from './schedule/-main'
import restlet from './restlet/-main'

export default interface entrypoints {
  'suitelet': suitelet
  'mapReduce': mapReduce
  'userEvent': userEvent
  'schedule': schedule
  'restlet': restlet
}
