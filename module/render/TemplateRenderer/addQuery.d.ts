
import Query from '../../query/Query/-main'

export default interface addQuery {
  (options: {
    id?: string
    pageIndex?: number
    pageSize?: number
    templateName: string
    query?: Query
  }): void
}

