
import getParameter from './getParameter'

export default interface Script {
  apiVersion: string
  bundleIds: number[]
  deploymentId: string
  id: string
  logLevel: string
  percentComplete: number

  getParameter: getParameter
}

