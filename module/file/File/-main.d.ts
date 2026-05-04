
import Type from '../Type'

export default interface File {
  description: string
  encoding: string
  fileType: Type[keyof Type]
  folder: number
  id: number
  isInactive: boolean
  isOnline: boolean
  isText: boolean
  name: string
  path: string
  size: number
  url: string
}
