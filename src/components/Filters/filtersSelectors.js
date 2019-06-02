export const pageSelector = (filters) => {
  if (filters.offset === 0) {
    return 1;
  }

  return filters.offset / 20 + 1;
};

export default {
  pageSelector,
};
