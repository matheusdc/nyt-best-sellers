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

import Collapse from 'antd/lib/collapse';
import 'antd/lib/collapse/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Descriptions from 'antd/lib/descriptions';
import 'antd/lib/descriptions/style/css';

import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style/css';

import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/css';

import { getBooks, setFilters } from '../../actions';
import { booksDetailsSelector } from './booksSelector';
import { pageSelector } from '../Filters/filtersSelectors';

const { Panel } = Collapse;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const renderActions = ({ amazonProductUrl }) => ([
  <a href={amazonProductUrl}><IconText type="amazon" text="Buy it on Amazon" /></a>,
]);

const Books = ({
  books, error, total, page,
}) => {
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Fragment>
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
            renderItem={({
              title, description, skeleton, author, publisher, contributor, primary_isbn10: isbn, amazonProductUrl,
            }) => (
              <List.Item actions={renderActions({ amazonProductUrl })}>
                  <Skeleton title loading={skeleton} active paragraph={{ rows: 2 }}>
                    <List.Item.Meta
                      title={title}
                      description={description}
                    />
                    <Collapse>
                      <Panel header="Show more">
                        <Descriptions title="Book details">
                          <Descriptions.Item label="Author">{author}</Descriptions.Item>
                          <Descriptions.Item label="ISBN">{isbn}</Descriptions.Item>
                          <Descriptions.Item label="Publisher">{publisher}</Descriptions.Item>
                          <Descriptions.Item label="Contributors">{contributor}</Descriptions.Item>
                        </Descriptions>
                      </Panel>
                    </Collapse>
                  </Skeleton>
                </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row gutter={8} type="flex" justify="center">
        <Col>
          <Pagination defaultCurrent={page} total={total} pageSize={20} onChange={pageNumber => setFilters({ offset: (pageNumber - 1) * 20 })} />
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
  page: PropTypes.number,
  total: PropTypes.number,
};

const mapStateToProps = ({ books, filters }) => ({
  books: booksDetailsSelector(books),
  total: books.numberOfResults,
  error: books.error,
  loading: books.loading,
  page: pageSelector(filters),
});

export default connect(mapStateToProps)(Books);
