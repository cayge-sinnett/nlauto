
import Record from '../../record/Record/-main'

export default interface addRecord {
  (options: {
    templateName: string
    record: Record
  }): void
}
