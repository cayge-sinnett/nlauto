
import Search from './Search/-main'

export default interface load {
  /**
   * @param id
   * @param type
   */
  (options: {
    id: string
    type?: string
  } | number): Search
}

