
import addCustomDataSource from './addCustomDataSource'
import addQuery from './addQuery'
import addRecord from './addRecord'
import addSearchResults from './addSearchResults'
import renderAsPdf from './renderAsPdf'
import renderPdfToResponse from './renderPdfToResponse'
import renderAsString from './renderAsString'
import setTemplateById from './setTemplateById'
import setTemplateByScriptId from './setTemplateByScriptId'
import renderToResponse from './renderToResponse'

export default interface TemplateRenderer {
  templateContent: string

  addCustomDataSource: addCustomDataSource
  addQuery: addQuery
  addRecord: addRecord
  addSearchResults: addSearchResults
  renderAsPdf: renderAsPdf
  renderPdfToResponse: renderPdfToResponse
  renderAsString: renderAsString
  setTemplateById: setTemplateById
  setTemplateByScriptId: setTemplateByScriptId
  renderToResponse: renderToResponse
}
