
export default interface summarize {
  (context: {
    isRestarted: boolean
    concurrency: number
    dateCreated: Date
    /** total runtime of m/r */
    seconds: number
    /** total governance used */
    usage: number
    yields: number
    inputSummary: {
      dateCreated: Date
      seconds: number
      usage: number
      error: string
    }
    mapSummary: {
      concurrency: number
      dateCreated: Date
      keys: string[]
      seconds: number
      usage: number
      yields: number
      errors: {
        iterator(): {
          each(
            callback: (
              key: string,
              error: string,
              executionNo: number,
            )=> boolean
          ): void
        }
      }
    }
    reduceSummary: {
      concurrency: number
      dateCreated: Date
      keys: string[]
      seconds: number
      usage: number
      yields: number
      errors: {
        iterator(): {
          each(
            callback: (
              key: string,
              error: string,
              executionNo: number,
            )=> boolean
          ): void
        }
      }
    }
    output: {
      iterator(): {
        each(
          key?: string,
          value?: string,
        ): boolean
      }
    }
  }): void
}
