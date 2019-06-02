import { createSelector } from 'reselect';

export const booksSelectors = books => books.list;

export const booksDetailsSelector = createSelector(
  booksSelectors,
  (books) => {
    const booksDetailed = books.map(
      ({ book_details: bookDetails, amazon_product_url: amazonProductUrl }) => ({
        ...bookDetails[0],
        amazonProductUrl,
      }),
    );

    return booksDetailed;
  },
);
