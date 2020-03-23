export const authState = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return true;
    case 'DEAUTHENTICATE_USER':
      return false;
    default:
      return state;
  }
};
