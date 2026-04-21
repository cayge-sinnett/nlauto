
import getInputData from './getInputData'
import map from './map'
import reduce from './reduce'
import summarize from './summarize'

export default interface mapReduce {
  /**
   * may return special data references
   * @example
   * return {type: 'search', id: 'customsearch_example'}
   * return {type: 'query', id: 2910}
   * return {type: 'file', path: '/SuiteScripts/results.csv'}
   * return {
   *   type: 'suiteql',
   *   query: 'SELECT * FROM transaction',
   *   params: [],
   * }
   */
  getInputData: getInputData
  /**
   * @param isRestarted
   * @param executionNo
   * @param errors
   * @param key
   * @param value
   * @param write
   */
  map: map
  /**
   * @param isRestarted
   * @param executionNo
   * @param errors
   * @param key
   * @param values
   * @param write
   */
  reduce: reduce
  /**
   * @param isRestarted
   * @param concurrency
   * @param dateCreated
   * @param seconds
   * @param usage
   * @param yields
   * @param inputSummary
   * @param mapSummary
   * @param reduceSummary
   * @param output
   */
  summarize: summarize
}
