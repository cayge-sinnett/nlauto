
import Dataset from '../../module/dataset/Dataset/-main'
import File from '../../module/file/File/-main'
import Query from '../../module/query/Query/-main'
import Search from '../../module/search/Search/-main'

export default interface getInputData {
  (context?: {
    isRestarted: boolean
    ObjectRef?: {
      id: string | number
      type: 'search'
    }
  }):
    | Dataset
    | File
    | Query
    | Search
    | any[]
    | Record<string, any>
    | {
      type: 'suiteql'
      query: string
      params?: (boolean | number | string)[]
    } | {
      type: 'query'
      id: number | string
    } | {
      type: 'search'
      id: number | string
    } | {
      type: 'file'
      id: number
    } | {
      type: 'file'
      path: string
    }
}
