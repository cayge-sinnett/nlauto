
import Record from './-main'

export default interface commitLine {
  (options: {
    sublistId: string
    ignoreRecalc?: boolean
  }): Record
  (sublistId: string): Record
}
