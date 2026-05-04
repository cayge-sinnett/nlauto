
import CsvImportTask from './CsvImportTask/-main'
import EntityDeduplicationTask from './EntityDeduplicationTask/-main'
import MapReduceScriptTask from './MapReduceScriptTask/-main'
import QueryTask from './QueryTask/-main'
import ScheduledScriptTask from './ScheduledScriptTask/-main'
import SearchTask from './SearchTask/-main'
import SuiteQLTask from './SuiteQLTask/-main'
import WorkflowTriggerTask from './WorkflowTriggerTask/-main'

import File from '../file/File/-main'
import Query from '../query/Query/-main'

export default interface create {
  (options: {
    taskType: 'SCHEDULED_SCRIPT'
    scriptId: number | string
    deploymentId?: string
    params?: Record<string, any>
  }): ScheduledScriptTask
  (options: {
    taskType: 'MAP_REDUCE'
    scriptId: number | string
    deploymentId?: string
    params?: Record<string, any>
  }): MapReduceScriptTask
  (options: {
    taskType: 'CSV_IMPORT'
    importFile: File | string
    mappingId: number | string
    queueId?: number
    name?: string
    linkedFiles?: any
  }): CsvImportTask
  (options: {
    taskType: 'ENTITY_DEDUPLICATION'
    dedupeMode: string
    entityType: string
    masterRecordId: string
    masterSelectionMode: string
    recordIds: number[]
  }): EntityDeduplicationTask
  (options: {
    taskType: 'WORKFLOW_TRIGGER'
    recordId: number
    recordType: string
    workflowId: number | string
    params: Record<string, any>
  }): WorkflowTriggerTask
  (options: {
    taskType: 'SEARCH'
    savedSearchId: string
    fileId?: number
    filePath?: string
  }): SearchTask
  (options: {
    taskType: 'QUERY'
    query: Query
    fileId?: number
    filePath?: string
  }): QueryTask
  (options: {
    taskType: 'SUITEQL'
    query: string
    params?: (number | string)[]
    fileId?: number
    filePath?: string
  }): SuiteQLTask
}

