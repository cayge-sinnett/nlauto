
export default interface getLineCount {
  /**
   * @param group - the sublist script id
   * @throws SSS_MISSING_REQD_ARGUMENT
   */
  (options: {group: string}): number
}

