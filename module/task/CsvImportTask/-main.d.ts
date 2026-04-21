
import File from '../../file/File/-main'

import submit from './submit'

export default interface CsvImportTask {
  id: string
  importFile: File | string
  linkedFiles: any
  mappingId: number | string
  name: string
  queueId: number

  submit: submit
}
