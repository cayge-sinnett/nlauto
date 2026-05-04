
import Record from './Record/-main'

export default interface transform {
  (options: {
    fromType: string
    fromId: string | number
    toType: string
    isDynamic?: true
    defaultValues?: {[cust: string]: any}
  }): Record
}

