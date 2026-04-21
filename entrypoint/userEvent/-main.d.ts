
import afterSubmit from './afterSubmit'
import beforeSubmit from './beforeSubmit'

export default interface userEvent {
  afterSubmit?: afterSubmit
  beforeSubmit?: beforeSubmit
}
