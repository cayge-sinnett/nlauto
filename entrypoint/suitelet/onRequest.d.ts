
import ServerRequest from '../../module/http/ServerRequest/-main'
import ServerResponse from '../../module/http/ServerResponse/-main'

export default interface onRequest {
  (context?: {
    request: ServerRequest
    response: ServerResponse
  }): void
}
