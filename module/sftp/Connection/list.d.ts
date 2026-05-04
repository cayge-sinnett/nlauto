
import Sort from '../Sort'

export default interface list {
	(options: {
		path: string
		sort: Sort[keyof Sort]
	}): {
		directory: string
		name: string
		size: string
		lastModified: string
	}[]
}
