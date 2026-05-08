
import Search from './Search/-main'
import Column from './Column/-main'

import Type from './Type'

export default interface create {
  (options: {
    type: Type[keyof Type]
    filters?: filterExpression
    columns: (Column | string)[]
  }): Search
}

type filterExpression= any[]

