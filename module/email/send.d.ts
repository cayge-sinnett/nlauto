
import File from '../file/File/-main'

export default interface send {
  /**
   * @gov 20
   * @param author - internal id of employee who has ADMI_VICARIOUS_EMAILS permission set
   * @param body
   * @param recipients - maximum of 10 recipients allowed
   * @param subject
   * @param attachments - each must be less than 10MB and total less than 15MB
   * @param bcc - maximum of 10 recipients allowed
   * @param cc - maximum of 10 recipients allowed
   * @param isInternalOnly
   * @param relatedRecords
   * @param replyTo
   *
   * @throws SSS_AUTHOR_MUST_BE_EMPLOYEE - The author internal id or email must match an employee. The author internal ID or email address doesn't match an employee.
   * @throws SSS_INVALID_TO_EMAIL - One or more recipient emails are not valid. A recipient's email address is invalid.
   * @throws SSS_INVALID_CC_EMAIL - One or more cc emails are not valid. An email address specified in the options.cc parameter is invalid.
   * @throws SSS_INVALID_BCC_EMAIL - One or more bcc emails are not valid. An email address specified in the options.bcc parameter is invalid
   * @throws SSS_MAXIMUM_NUMBER_RECIPIENTS_EXCEEDED - You may have a maximum number of 10 recipients. A total number of recipients (options.recipients + options.cc + options.bcc) exceeds 10.
   * @throws SSS_MISSING_REQD_ARGUMENT - {method name}: Missing a required argument: {param name} A required parameter is missing.
   * @throws WRONG_PARAMETER_TYPE - Wrong parameter type: {param name} is expected as {param type}. A parameter's type is incorrect.
   * @throws SSS_FILE_CONTENT_SIZE_EXCEEDED - The file content you are attempting to access exceeds the maximum allowed size of 10MB. An attachment exceeds the 10 MB file size limit.
   * @throws ATTACH_SIZE_EXCEEDED - This message exceeds the limit of 15 MB. Please reduce the size of the message and its attachments and try again. Note: Files can be larger when attached due to encoding. The size of the attachments exceeds the limit.
   */
  (options: {
    author: number
    body: string
    recipients: number | string | (number | string)[]
    subject: string
    attachments?: File[]
    bcc?: (number | string)[]
    cc?: (number | string)[]
    isInternalOnly?: boolean
    relatedRecords?: {
      activityId: number
      entityId?: number
    } | {
      entityId: number
    } | {
      transactionId: number
      entityId?: number
    } | {
      customRecord: {
        recordType: `${number}` | number
        id: number
      }
      entityId?: number
    }
    replyTo?: string
  }): void
}
