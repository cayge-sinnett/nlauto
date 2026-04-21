
export default interface submitFields {
  /**
   * @param id
   * @param type
   * @param values
   * @param options
   * @example
   * let id= record.submitFields({
   *   type: record.Type.SALES_ORDER,
   *   id: 1,
   *   values: {
   *     memo: 'ABC',
   *     custbody_example: 12
   *   },
   *   options: {
   *     enableSourcing: false,
   *     ignoreMandatoryFields : true
   *   }
   * })
   *
   */
  (options: {
    id: number
    type: string
    values: Record<string, any>
    options?: {
      enableSourcing?: boolean
      ignoreMandatoryFields?: boolean
    }
  }): number
}
