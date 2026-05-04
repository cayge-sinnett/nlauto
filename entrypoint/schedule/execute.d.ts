
export default interface execute {
  (context: {
    type: 
      | 'SCHEDULED'
      | 'ON_DEMAND'
      | 'USER_INTERFACE'
      | 'ABORTED'
      | 'SKIPPED'
  }): void
}
