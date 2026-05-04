
import ServerResponse from '../../http/ServerResponse/-main'

export default interface renderPdfToResponse {
  (options: {
    response: ServerResponse
  }): void
}
