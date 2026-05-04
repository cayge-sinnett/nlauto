
import create from './create'
import load from './load'
import submitFields from './submitFields'
import transform from './transform'
import del from './delete'

export default interface record {
  create: create
  load: load
  submitFields: submitFields
  transform: transform
  delete: del
}
