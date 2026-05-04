
import Record from './Record/-main'

export default interface load {
  (options: {
    type: string
    id: number | string
    isDynamic?: boolean
    defaultValues?: {
      customform?: number
      assemblyitem?: number
      entity?: number
      disablepaymentfilters?: number
      subtype?: 'sale' | 'resale' | 'purchase'
      nexuscountry?: string
      country?: string
      parenttopic?: number
    }
  }): Record
}
