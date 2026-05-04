
export default interface resolveScript {
  (options: {
    deploymetId: number | string
    scriptId: number | string
    params?: Record<string, any>
    returnExternalUrl?: boolean
  }): string
}
