const userReducer = (set) => {
  return (action, payload) => {
    switch (action) {
      case 'SIGN_IN_USER':
        set((state) => ({
          ...state,
          ...payload
        }));
        break;

      default:
        break;
    }
  };
};

export default userReducer;
