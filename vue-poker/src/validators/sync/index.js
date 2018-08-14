import zxcvbn from 'zxcvbn'

const securePassword = (value) => zxcvbn(value).score > 2

const manualError = (trigger) => (value) => !trigger

export { securePassword, manualError }
