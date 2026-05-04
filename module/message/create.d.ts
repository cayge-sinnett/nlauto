
import Message from './Message/-main'

import Type from './Type'

export default interface create {
  (options: {
    type: Type[keyof Type]
    title?: string
    message?: string
    duration?: number | string
  }): Message
}
