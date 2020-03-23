export const toggleAuth = flag => {
  return {
    type: flag ? 'AUTHENTICATE_USER' : 'DEAUTHENTICATE_USER',
  };
};
