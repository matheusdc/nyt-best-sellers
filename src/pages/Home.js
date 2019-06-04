import React, { useState, Fragment } from 'react';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Books from '../components/Books';
import Filters from '../components/Filters';
import FiltersButton from '../components/Filters/FiltersButton';
import NYTLogo from '../components/NYTLogo';
import Header from '../components/Header';

import BookDetailModal from '../components/Books/BookDetailModal';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => setVisible(!visible);

  return (
    <Fragment>
      <Row type="flex" justify="center" style={{ marginBottom: 20 }}>
        <Col xs={22} xl={18}>
          <Header />
          <Books />
          <FiltersButton onClick={toggleDrawer} />
          <Filters visible={visible} toggleDrawer={toggleDrawer} />
          <BookDetailModal />
        </Col>
        <Col xs={22} xl={18} style={{ textAlign: 'center' }}>
          <NYTLogo />
        </Col>
      </Row>

    </Fragment>
  );
};

export default Home;
