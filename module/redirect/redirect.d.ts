
export default interface redirect {
  (options: {
    url: string
    parameters?: {[key: string]: string}
  }): void
}
