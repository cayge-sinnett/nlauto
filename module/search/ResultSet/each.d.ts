
import Result from '../Result/-main'

export default interface each {
  (callback: (result: Result)=> boolean): void
}

