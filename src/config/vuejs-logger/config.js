const debug = process.env.NODE_ENV !== 'production'

export default {
  isEnabled: debug,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '||',
  showConsoleColors: true
}
