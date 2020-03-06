import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { fetchNames } from '../actions/listActions';
import { Link } from 'react-router-dom';

class List extends Component<IListProps, IListState> {
  componentDidMount() {
    this.props.fetchNames();
  }

  render() {
    const renderNames = this.props.names.map((name: string, i: number) => (
      <li key={i}>
        { name }
      </li>
    ));

    return (
      <div>
        <h1>Here are names.</h1>
        <ul>
          { renderNames }
        </ul>

        <Link to={`/`}>Go home.</Link>
      </div>
    )
  }
}

interface IListProps {
  [key: string]: any;
}

interface IListState {
  
}

const mapStateToProps = (state: AppState) => ({
  names: state.list.names
})

export default connect(mapStateToProps, { fetchNames })(List);