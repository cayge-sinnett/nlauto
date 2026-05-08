
import redirect from './redirect'
import toRecord from './toRecord'
import toRecordTransform from './toRecordTransform'
import toSavedSearch from './toSavedSearch'
import toSavedSearchResult from './toSavedSearchResult'
import toSearch from './toSearch'
import toSearchResult from './toSearchResult'
import toSuitelet from './toSuitelet'
import toTaskLink from './toTaskLink'

export default interface redirect {
  redirect: redirect
  toRecord: toRecord
  toRecordTransform: toRecordTransform
  toSavedSearch: toSavedSearch
  toSavedSearchResult: toSavedSearchResult
  toSearch: toSearch
  toSearchResult: toSearchResult
  toSuitelet: toSuitelet
  toTaskLink: toTaskLink
}

