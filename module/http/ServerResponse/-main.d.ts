
import addHeader from './addHeader'
import getHeader from './getHeader'
import renderPdf from './renderPdf'
import sendRedirect from './sendRedirect'
import setCdnCacheable from './setCdnCacheable'
import setHeader from './setHeader'
import write from './write'
import writeFile from './writeFile'
import writeLine from './writeLine'
import writePage from './writePage'

export default interface ServerResponse {
  headers: any

  addHeader: addHeader
  getHeader: getHeader
  renderPdf: renderPdf
  sendRedirect: sendRedirect
  setCdnCacheable: setCdnCacheable
  setHeader: setHeader
  write: write
  writeFile: writeFile
  writeLine: writeLine
  writePage: writePage
}
