
import File from '../../file/File/-main'

export default interface upload {
	/**
	 * @gov 100
	 * @description max file size is 100mb
	 * @param file
	 * @param filename - option to rename file; illegal characters
	 * are escaped
	 * @param directory - relative path
	 * @param timeout
	 * @param replaceExisting - whether the file can overwrite an
	 * existing file
	 */
	(options: {
		file: File
		filename?: string
		directory?: string
		timeout?: number
		replaceExisting?: boolean
	}): void
}
