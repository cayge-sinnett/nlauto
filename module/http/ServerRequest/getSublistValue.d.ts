
export default interface getSublistValue {
  /**
   * @param group - sublist script id
   * @param line - number starting at 0
   * @param name - field script id
   * @returns string
   */
  (options: {
    group: string
    line: number
    name: string
  }): string
}

