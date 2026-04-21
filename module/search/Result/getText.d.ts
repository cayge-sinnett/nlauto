
import Column from '../Column/-main'

export default interface getText {
  (column: {
    name: string
    join?: string
    summary?: string
  } | Column): string
}
