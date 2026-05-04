
import Record from '../../module/record/Record/-main'
import Form from '../../module/serverWidget/Form/-main'
import ServerRequest from '../../module/http/ServerRequest/-main'

export default interface beforeLoad {
  (context: {
    type: 'create' | 'edit' | 'view' | 'copy' | 'print' | 'email' | 'quick view'
    newRecord: Record
    form: Form
    request: ServerRequest
  }): void
}
