
import Method from '../Method'

import getSublistValue from './getSublistValue'
import getLineCount from './getLineCount'

export default interface ServerRequest {
  body: string
  files: any
  headers: any
  clientIpAddress: string
  method: Method[keyof Method]

  getLineCount: getLineCount
  getSublistValue: getSublistValue
}
