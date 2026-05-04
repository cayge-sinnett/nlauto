
import PageRange from '../PageRange/-main'

import fetch from './fetch'

export default interface PagedData {
  pageRanges: PageRange[]

  fetch: fetch
}

