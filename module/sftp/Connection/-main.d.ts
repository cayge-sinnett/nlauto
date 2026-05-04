
import download from './download'
import upload from './upload'
import makeDirectory from './makeDirectory'
import removeDirectory from './removeDirectory'
import removeFile from './removeFile'
import move from './move'
import list from './list'

export default interface Connection {
	download: download
	upload: upload
	makeDirectory: makeDirectory
	removeDirectory: removeDirectory
	removeFile: removeFile
	move: move
	list: list
}

