
import submit from './submit'
import addInboundDependency from './addInboundDependency'

export default interface SuiteQLTask {
  fileId: number
  filePath: string
  id: string
  inboundDependencies: any[]
  params: (boolean | number | string)[]
  query: string

  addInboundDependency: addInboundDependency
  submit: submit
}
