import measureEntropy from 'fast-password-entropy'

export default (minimum) => (value, vm) => measureEntropy(value) > minimum
