
export default interface toRecord {
  (options: {
    id: string
    type: string
    isEditMode?: boolean
    parameters?: {[key: string]: string}
  }): void
}

