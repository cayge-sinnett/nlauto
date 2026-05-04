
import PagedData from '../PagedData/-main'

export default interface runPaged {
  (options: {
    pageSize?: number
  }): PagedData
}
