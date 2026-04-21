
import Column from '../Column/-main'

import getText from './getText'
import getValue from './getValue'

export default interface Result {
  columns: Column[]
  id: string
  recordType: string

  getText: getText
  getValue: getValue
}
