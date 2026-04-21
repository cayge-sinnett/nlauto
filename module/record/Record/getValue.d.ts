
export default interface getValue {
  /**
   * @param fieldId
   */
  (options: {fieldId: string}): any
  (fieldId: string): any
}
