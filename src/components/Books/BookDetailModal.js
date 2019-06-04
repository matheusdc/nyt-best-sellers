import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import Descriptions from 'antd/lib/descriptions';
import 'antd/lib/descriptions/style/css';
import { selectBook } from '../../actions';

const BookDetailModal = ({ book }) => {
  const handleClose = () => selectBook(null);

  return (
    <Fragment>
      {book && (
        <Modal
          visible
          title={book.title}
          onCancel={handleClose}
          centered
          footer={[
            <Button key="back" onClick={handleClose}>
              Close
            </Button>]}
        >
          <p>{book.description}</p>
          <Descriptions
            title="Book details"
          >
            <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
            <Descriptions.Item label="ISBN">{book.primary_isbn10}</Descriptions.Item>
            <Descriptions.Item label="Publisher">{book.publisher}</Descriptions.Item>
            <Descriptions.Item label="Contributors">{book.contributor}</Descriptions.Item>
          </Descriptions>
        </Modal>
      )}
    </Fragment>
  );
};

BookDetailModal.defaultProps = {
  book: null,
};

BookDetailModal.propTypes = {
  book: PropTypes.object,
};

const mapStateToProps = ({ books }) => ({
  book: books.selectedBook,
});

export default connect(mapStateToProps)(BookDetailModal);
