import React, { Component } from 'react';
import {inject} from 'mobx-react';

@inject('filterStore')
class Filter extends Component {
  search = ({target: {value}}) => {
    const {filterStore} = this.props;

    filterStore.setSearch(value);
  }

  render() {
    return (
      <div className="Contener">
        <input onChange={this.search}></input>
      </div>);
  }
}

export default Filter;
