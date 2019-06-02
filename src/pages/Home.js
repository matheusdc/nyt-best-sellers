import React, { useState } from 'react';

import Tipography from 'antd/lib/typography';
import 'antd/lib/typography/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Books from '../components/Books';
import Filters from '../components/Filters';
import FiltersButton from '../components/Filters/FiltersButton';

const { Title } = Tipography;

const Home = () => {
  const [visible, setVisible] = useState(false);
  const toggleDrawer = () => setVisible(!visible);

  return (
    <Row type="flex" justify="center">
      <Col xs={22} xl={18}>
        <Title style={{ marginTop: 48, fontSize: '3.7rem' }}>Books</Title>
        <Books />
        <FiltersButton onClick={toggleDrawer} />
        <Filters visible={visible} toggleDrawer={toggleDrawer} />
      </Col>
    </Row>
  );
};

export default Home;
