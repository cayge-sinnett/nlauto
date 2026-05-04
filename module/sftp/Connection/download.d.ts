
import File from '../../file/File/-main'

export default interface download {
	/**
	 * @gov 100
	 * @param filename
	 * @param directory - relative path; defaults to current
	 * directory
	 * @param timeout - seconds to allow for download before
	 * cancelling; defaults to 300
   * @throws FTP_MAXIMUM_FILE_SIZE_EXCEEDED - The file size is greater than the maximum file size allowed by NetSuite.
   * @throws FTP_NO_SUCH_FILE_OR_DIRECTORY - The file or directory does not exist.
   * @throws FTP_TRANSFER_TIMEOUT_EXCEEDED - The transfer is taking longer than the specified options.timeout value.
   * @throws FTP_INVALID_TRANSFER_TIMEOUT - The options.timeout value is either a negative value, zero or greater than 300 seconds.
   * @throws FTP_PERMISSION_DENIED - Access to the file or directory on the remote FTP server was denied.
   * @throws CONNECTION_RESET - The connection was reset.
   * @throws THE_REMOTE_PATH_FOR_FILE_IS_NOT_VALID - The file's remote path is invalid.
   * @throws CONNECTION_CLOSED_BY_HOST - The connection was closed by the host.
	 */
	(options: {
		filename: string
		directory?: string
		timeout?: number
	}): File
}
