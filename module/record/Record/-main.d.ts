
import getValue from './getValue'
import setValue from './setValue'
import save from './save'

export default interface Record {
  id?: number
  type: string
  isDynamic: boolean

  getValue: getValue
  setValue: setValue
  save: save
}
