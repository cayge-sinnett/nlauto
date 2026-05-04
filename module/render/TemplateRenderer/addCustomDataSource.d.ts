
import DataSource from '../DataSource'

export default interface addCustomDataSource {
  (options: {
    alias: string
    format: DataSource[keyof DataSource]
    data: any
  }): void
}
