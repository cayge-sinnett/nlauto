
import email from './email/-main'
import http from './http/-main'
import https from './https/-main'
import log from './log/-main'
import query from './query/-main'
import record from './record/-main'
import render from './render/-main'
import runtime from './runtime/-main'
import search from './search/-main'
import serverWidget from './serverWidget/-main'
import task from './task/-main'
import url from './url/-main'
import message from './message/-main'
import file from './file/-main'

export default interface modules {
  'N/email': email
  'N/http': http
  'N/https': https
  'N/query': query
  'N/record': record
  'N/render': render
  'N/runtime': runtime
  'N/search': search
  'N/task': task
  'N/ui/serverWidget': serverWidget
  'N/log': log
  'N/url': url
  'N/ui/message': message
  'N/file': file
}
