
import http from './http/-main'
import log from './log/-main'
import query from './query/-main'
import record from './record/-main'
import runtime from './runtime/-main'
import search from './search/-main'
import serverWidget from './serverWidget/-main'
import task from './task/-main'

export default interface modules {
  'N/http': http
  'N/query': query
  'N/record': record
  'N/runtime': runtime
  'N/search': search
  'N/task': task
  'N/ui/serverWidget': serverWidget
  'N/log': log
}
