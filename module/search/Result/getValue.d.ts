
import Column from '../Column/-main'

export default interface getValue {
  (column: {
    name: string
    join?: string
    summary?: string
    func?: string
  } | Column): boolean | number | string
}

