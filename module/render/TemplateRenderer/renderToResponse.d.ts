
import ServerResponse from '../../http/ServerResponse/-main'

export default interface renderToResponse {
  (options: {
    response: ServerResponse
  }): void
}
