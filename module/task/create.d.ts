
import TaskType from './TaskType'

export default interface create {
  <const type extends TaskType[keyof TaskType]>(options: {

  }): void
}

type TaskTypeMap= {
  SCHEDULED_SCRIPT: 0
  MAP_REDUCE: 0
  CSV_IMPORT: 0
  ENTITY_DEDUPLICATION: 0
  WORKFLOW_TRIGGER: 0
  SEARCH: 0
  QUERY: 0
  SUITEQL: 0
  RECORD_ACTION: 0
  PIVOT: 0
  DOCUMENT_CAPTURE: 0
}

