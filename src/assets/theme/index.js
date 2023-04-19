export const theme = {
  color: {
    primaryColor: 'green',
    secondaryColor: '#00848a'
  },
  text: {
    primaryColor: '#222',
    secondaryColor: '#222'
  },
  mixin: {
    boxShadow: `
            transition: box-shadow .2s ease;
            &:hover {
                box-shadow: 0 2px 4px rgba(0,0,0,0.18);
            }
        `
  }
}
