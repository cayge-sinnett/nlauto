
export default interface save {
  (options?: {
    enableSourcing?: boolean
    ignoreMandatoryFields?: boolean
  }): number
}
