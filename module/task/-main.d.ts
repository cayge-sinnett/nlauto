
import MapReduceStage from './MapReduceStage'
import TaskStatus from './TaskStatus'
import TaskType from './TaskType'

import checkStatus from './checkStatus'
import create from './create'

export default interface task {
  MapReduceStage: MapReduceStage
  TaskStatus: TaskStatus
  TaskType: TaskType

  checkStatus: checkStatus
  create: create
}
