
import ScheduledScriptTask from '../ScheduledScriptTask/-main'
import MapReduceScriptTask from '../MapReduceScriptTask/-main'

export default interface addInboundDependency {
  (options: ScheduledScriptTask | MapReduceScriptTask): void
}

