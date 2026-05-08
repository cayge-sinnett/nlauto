
import Type from './Type'

import create from './create'
import load from './load'

export default interface file {
  Type: Type

  create: create
  load: load
}
