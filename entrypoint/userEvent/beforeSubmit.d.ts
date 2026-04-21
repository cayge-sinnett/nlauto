
import Record from '../../module/record/Record/-main'

export default interface beforeSubmit {
  (context: {
    type: 'create'
    newRecord: Record
    oldRecord: null
  } | {
    type: 'xedit' | 'edit' | 'delete'
    newRecord: Record
    oldRecord: Record
  }): void
}

