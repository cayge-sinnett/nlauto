
import Record from './-main'

export default interface selectNewLine {
  (options: {sublistId: string}): Record
  (sublistId: string): Record
}
