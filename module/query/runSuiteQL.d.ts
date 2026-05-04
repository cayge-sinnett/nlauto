
import ResultSet from './ResultSet/-main'

export default interface runSuiteQL {
  (options: {
    query: string
    params?: (number | string)[]
    customScriptId?: string
    metaDataProvider?: 'SUITE_QL' | 'STATIC'
  } | string): ResultSet
}
