
export default interface lookupFields {
  /**
   * @param type
   * @param id
   * @param columns
   */
  <const column extends string>(options: {
    type: string
    id: string | number
    columns: column
  }): Record<column, boolean | number | string | select | select[]>
  /**
   * @param type
   * @param id
   * @param columns
   */
  <const columns extends string[]>(options: {
    type: string
    id: string | number
    columns: columns
  }): {
    [column in columns[number]]:
      boolean | number | string | select | select[]
  }
}

type select= {value: number, text: string}
