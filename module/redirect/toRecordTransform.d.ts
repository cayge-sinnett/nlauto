
export default interface toRecordTransform {
  (options: {
    fromId: number
    fromType: string
    toType: string
    parameters?: {[key: string]: string}
  }): void
}

