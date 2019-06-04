import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from 'antd/lib/list';
import 'antd/lib/list/style/css';

import Skeleton from 'antd/lib/skeleton';
import 'antd/lib/skeleton/style/css';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style/css';

import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';

import Tipography from 'antd/lib/typography';
import 'antd/lib/typography/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import { getBooks, setFilters, selectBook } from '../../actions';
import { booksDetailsSelector } from './booksSelector';
import { pageSelector } from '../Filters/filtersSelectors';

const { Title } = Tipography;

// eslint-disable-next-line react/prop-types
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const renderActions = book => ([
  <a href={book.amazonProductUrl}><IconText type="amazon" text="Buy it on Amazon" /></a>,
  <Button type="link" style={{ padding: 0 }} onClick={() => selectBook(book)}><IconText type="info-circle" text="Book Details" /></Button>,
]);

const Books = ({
  books, category, error, total, page,
}) => {
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Fragment>
      <Title level={3}>{`${category} category`}</Title>
      {error && (
        <Alert
          style={{ marginTop: 48 }}
          message="Ops... Something went wrong"
          description="An error occurred, please try again later"
          type="error"
          showIcon
        />
      )}
      <Row gutter={8} type="flex" justify="center">
        <Col xs={24} xl={24}>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={books}
            renderItem={book => (
              <List.Item actions={renderActions(book)}>
                <Skeleton title loading={book.skeleton} active paragraph={{ rows: 2 }}>
                  <List.Item.Meta
                    title={book.title}
                    description={book.description}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row gutter={8} type="flex" justify="center">
        <Col>
          <Pagination
            defaultCurrent={page}
            total={total}
            pageSize={20}
            onChange={pageNumber => setFilters({ offset: (pageNumber - 1) * 20 })}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

Books.defaultProps = {
  total: 20,
  page: 1,
};

Books.propTypes = {
  books: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  page: PropTypes.number,
  total: PropTypes.number,
};

const mapStateToProps = ({ books, filters }) => ({
  books: booksDetailsSelector(books),
  category: books.category,
  total: books.numberOfResults,
  error: books.error,
  loading: books.loading,
  page: pageSelector(filters),
});

export default connect(mapStateToProps)(Books);
