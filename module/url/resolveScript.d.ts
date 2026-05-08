
export default interface resolveScript {
  (options: {
    deploymentId: number | string
    scriptId: number | string
    params?: Record<string, any>
    returnExternalUrl?: boolean
  }): string
}
