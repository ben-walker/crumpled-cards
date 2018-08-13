import zxcvbn from 'zxcvbn'

const securePassword = (value) => zxcvbn(value).score > 2

export { securePassword }
