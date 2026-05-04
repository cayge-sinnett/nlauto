
import Message from '../../message/Message/-main'

import Type from '../../message/Type'

export default interface addPageInitMessage {
  (options: {
    message: Message
  } | {
    type: Type[keyof Type]
    title?: string
    message?: string
    duration?: number | string
  }): void
}
