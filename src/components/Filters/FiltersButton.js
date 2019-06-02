import React from 'react';
import PropTypes from 'prop-types';

import Affix from 'antd/lib/affix';
import 'antd/lib/affix/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

const FiltersButton = ({ onClick }) => (
  <Affix offsetBottom={20} style={{ float: 'right' }}>
    <Button
      type="primary"
      shape="circle"
      icon="filter"
      onClick={onClick}
    />
  </Affix>
);

FiltersButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FiltersButton;
