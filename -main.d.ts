
import modules from './module/-main'
import entrypoints from './entrypoint/-main'

declare global {
  function define<
    const imports extends [...((keyof modules)[])],
    const entrypoint extends keyof entrypoints,
  >(
    imports: imports,
    entry: (...args: {
      [index in keyof imports]: modules[imports[index]]
    })=> entrypoints[entrypoint]
  ): void

  /**
   * @param title - must be string
   * @param message - if not string, JSON.stringify will be applied
   */
  namespace log {
    const debug: logger
    const audit: logger
    const error: logger
    const emergency: logger
  }
}

type logger=
  & ((title: string, message?: any)=> void)
  & ((options: {title: string, message?: any})=> void)
