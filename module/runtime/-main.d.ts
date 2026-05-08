
import getCurrentScript from './getCurrentScript'
import getCurrentUser from './getCurrentUser'
import getCurrentSession from './getCurrentSession'

export default interface runtime {
  getCurrentScript: getCurrentScript
  getCurrentUser: getCurrentUser
  getCurrentSession: getCurrentSession
}
