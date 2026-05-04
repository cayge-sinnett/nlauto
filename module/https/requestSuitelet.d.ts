
import ClientResponse from './ClientResponse/-main'

export default interface requestSuitelet {
  (options: {
    deploymentId: `customdeploy${string}`,
    scriptId: `customscript${string}`,
    body?: any
    headers?: any
    method?: string
    urlParams?: Record<string, any>
  }): ClientResponse
}

