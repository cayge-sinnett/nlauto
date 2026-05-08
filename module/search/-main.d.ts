
import load from './load'
import create from './create'
import lookupFields from './lookupFields'

import Type from './Type'

export default interface search {
  Type: Type

  load: load
  create: create
  lookupFields: lookupFields
}

