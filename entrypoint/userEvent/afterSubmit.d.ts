
import Record from '../../module/record/Record/-main'

export default interface afterSubmit {
  (context: {
    type: 'create'
    newRecord: Record
    oldRecord: null
  } | {
    type: 'xedit' | 'edit' | 'delete' | ({} & string)
    newRecord: Record
    oldRecord: Record
  }): void
}
