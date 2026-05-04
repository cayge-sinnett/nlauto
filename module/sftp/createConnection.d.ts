
import Connection from './Connection/-main'

export default interface createConnection {
	/**
	 * @param url
	 * @param passwordGuid
	 * @param keyId
	 * @param secret
	 * @param hostKey
	 * @param username
	 * @param port
	 * @param directory
	 * @param timeout
	 * @param hostKeyType
	 */
	(options: {
		url: string
	  passwordGuid: string
		hostKey: string
		username: string
		port?: number
		directory?: string
		timeout?: number
		hostKeyType?: 'dsa' | 'ecdsa' | 'rsa'
	} | {
		url: string
		keyId: string
		hostKey: string
		username: string
		port?: number
		directory?: string
		timeout?: number
		hostKeyType?: 'dsa' | 'ecdsa' | 'rsa'
	} | {
		url: string
		secret: string
		hostKey: string
		username: string
		port?: number
		directory?: string
		timeout?: number
		hostKeyType?: 'dsa' | 'ecdsa' | 'rsa'
	}): Connection
}

