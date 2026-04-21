
export default interface reduce {
  (context: {
    isRestarted: boolean
    executionNo: number
    errors: {
      iterator(): {
        /** error param is a serialization of the error */
        each(
          key?: string,
          error?: string,
          executionNo?: string,
        ): boolean
      }
    }
    key: string
    values: string[]
    /** if value is not a string, JSON.stringify is called on it */
    write(options: {
      key: string
      value: any
    }): void
  }): void
}
