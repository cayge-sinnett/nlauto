
import Sort from './Sort'

import createConnection from './createConnection'

export default interface sftp {
	MAX_CONNECT_TIMEOUT: number
	MIN_CONNECT_TIMEOUT: number
	MAX_PORT_NUMBER: number
	MIN_PORT_NUMBER: number
	DEFAULT_PORT_NUMBER: number

  createConnection: createConnection
}

