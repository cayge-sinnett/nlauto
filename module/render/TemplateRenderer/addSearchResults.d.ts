
import Result from '../../search/Result/-main'

export default interface addSearchResults {
  (options: {
    templateName: string
    searchResult: Result
  }): void
}
