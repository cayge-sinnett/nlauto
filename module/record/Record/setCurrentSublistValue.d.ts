
import Record from './-main'

export default interface setCurrentSublistValue {
  (options: {
    sublistId: string
    fieldId: string
    value: any
    ignoreFieldChange?: boolean
    forceSyncSourcing?: boolean
  }): Record
}
