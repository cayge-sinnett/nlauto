
export default interface toSuitelet {
  (options: {
    scriptId: string
    deploymentId: string
    isExternal?: string
    parameters?: {[key: string]: string}
  }): void
}

