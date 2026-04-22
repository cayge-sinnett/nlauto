
export default interface debug {
  /**
   * @param title - must be string
   * @param message - if not string, JSON.stringify will be applied
   */
  (title: string, message?: any): void
  /**
   * @param title - must be string
   * @param message - if not string, JSON.stringify will be applied
   */
  (options: {title: string, message?: any}): void
}
