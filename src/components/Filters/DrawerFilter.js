import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Drawer from 'antd/lib/drawer';
import 'antd/lib/drawer/style/css';

import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';

import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import { setFilters, setBooksCategory } from '../../actions';
import { getListNames } from '../../services/NytBooksApi';

const { Option } = Select;

const DrawerFilter = ({ visible, toggleDrawer }) => {
  const [lists, setLists] = useState([]);
  const [loadingLists, setLoadingLists] = useState(true);

  const updateListNames = async () => {
    setLoadingLists(true);
    const { data: { results } } = await getListNames();
    setLoadingLists(false);

    const cleanedList = results.map(
      ({ display_name: name, list_name_encoded: value }) => ({ name, value }),
    );
    setLists(cleanedList);
  };

  useEffect(() => {
    updateListNames();
  }, []);

  const onCategoryChange = (value, target) => {
    const category = target.props.children;
    setFilters({ list: value });
    setBooksCategory({ category });
  };

  return (
    <div>
      <Drawer
        title="Filter best sellers"
        onClose={toggleDrawer}
        visible={visible}
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={8}>
            <Col span={24}>
              <Form.Item label="Category">
                <Select
                  onChange={onCategoryChange}
                  placeholder="Please select a category"
                  loading={loadingLists}
                >
                  {lists.map(({ value, name }) => (
                    <Option key={value} value={value}>{name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={24}>
              <Form.Item label="Published date">
                <DatePicker
                  onChange={value => setFilters({ 'published-date': value ? moment(value).format('YYYY-MM-DD') : undefined })}
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentNode}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

DrawerFilter.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};


export default DrawerFilter;
