export const fetch = () => {
  return {
    type: 'fetch'
  };
};

export const update = data => {
  return {
    type: 'update',
    payload: data
  };
};
