
import Column from '../Column/-main'

import run from './run'
import runPaged from './runPaged'

export default interface Search {
  columns: (Column | string)[]
  filterExpression: any[]
  filters: Filter[]
  id: string
  isPublic: boolean
  packageId: string
  searchId: number
  searchType: string
  settings: (Setting | string)[]
  title: string

  run: run
  runPaged: runPaged
}

