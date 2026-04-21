
import Record from './-main'

export default interface setValue {
  (options: {
    fieldId: string
    value: any
    ignoreFieldChange?: boolean
  }): Record
  (
    fieldId: string,
    value: any,
  ): Record
}
