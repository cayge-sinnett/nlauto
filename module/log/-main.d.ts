
  import debug from './debug'
  import audit from './audit'
  import error from './error'
  import emergency from './emergency'

export default interface log {
  debug: debug
  audit: audit
  error: error
  emergency: emergency
}
