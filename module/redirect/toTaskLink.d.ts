
export default interface toTaskLink {
  (options: {
    id: string
    parameters?: {[key: string]: string}
  }): void
}

