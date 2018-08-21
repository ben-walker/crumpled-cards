export default tableValidationSchema =
  title:
    isLength:
      options:
        min: 1
    trim: true
    escape: true
