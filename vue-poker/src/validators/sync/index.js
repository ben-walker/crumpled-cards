const securePassword = (zxcvbnScore) => (value) => zxcvbnScore > 2

const manualError = (trigger) => (value) => !trigger

export { securePassword, manualError }
