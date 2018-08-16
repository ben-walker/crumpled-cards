import measureEntropy from 'fast-password-entropy'

const MIN_ENTROPY = 40

export default (password) => () => measureEntropy(password) > MIN_ENTROPY
