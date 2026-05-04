
import Type from './Type'

import File from './File/-main'

export default interface create {
  (options: {
    name: string
    fileType: Type[keyof Type]
    contents?: string
    description?: string
    folder?: number
    encoding?: string
    isInactive?: boolean
    isOnline?: boolean
  }): File
}
