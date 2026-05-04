
import getValue from './getValue'
import getText from './getText'
import setValue from './setValue'
import save from './save'
import selectNewLine from './selectNewLine'
import setCurrentSublistValue from './setCurrentSublistValue'
import commitLine from './commitLine'
import getLineCount from './getLineCount'
import getSublistValue from './getSublistValue'
import setSublistValue from './setSublistValue'

export default interface Record {
  id?: number
  type: string
  isDynamic: boolean

  getValue: getValue
  getText: getText
  setValue: setValue
  save: save
  selectNewLine: selectNewLine
  setCurrentSublistValue: setCurrentSublistValue
  commitLine: commitLine
  getLineCount: getLineCount
  getSublistValue: getSublistValue
  setSublistValue: setSublistValue
}
