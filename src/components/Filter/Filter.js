import React, { Component } from 'react';
import {inject} from 'mobx-react';

import './Filter.css';

@inject('filterStore')
class Filter extends Component {
  search = ({target: {value}}) => {
    const {filterStore} = this.props;

    filterStore.setSearch(value);
  }

  render() {
    return (
      <div>
        Поиск: <input className='Input' onChange={this.search}></input>
      </div>);
  }
}

export default Filter;
