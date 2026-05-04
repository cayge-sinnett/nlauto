
import Record from './-main'

export default interface setSublistValue {
  (options: {
    sublistId: string
    fieldId: string
    line: number
    value: any
  }): Record
}
