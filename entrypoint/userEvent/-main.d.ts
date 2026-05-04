
import afterSubmit from './afterSubmit'
import beforeSubmit from './beforeSubmit'
import beforeLoad from './beforeLoad'

export default interface userEvent {
  afterSubmit?: afterSubmit
  beforeSubmit?: beforeSubmit
  beforeLoad?: beforeLoad
}
