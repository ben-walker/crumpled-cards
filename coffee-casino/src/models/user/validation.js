export default {
  username: {
    isLength: {
      options: { min: 4, max: 20 },
    },
    trim: true,
    escape: true,
  },
  email: {
    trim: true,
    isEmail: true,
    normalizeEmail: true,
  },
  password: {
    isLength: {
      options: { min: 8 },
    },
  },
};
