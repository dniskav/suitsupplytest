/**
 * SearchBox Component
 * component to search post 
 */
import React from 'react';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchPost } from '../../actions/posts';

const SearchBox = ({ search }) => (
  <Flexbox>
    <input type="text" className="search-box" placeholder="Type to search" onChange={search} />
  </Flexbox>
);

SearchBox.propTypes = {
  data: PropTypes.string,
  search: PropTypes.func, 
};

SearchBox.defaultProps = {
  search: () => {}, 
};

//to share Redux actions with the component by props
const mapDispatchToProps = (dispatch) => {
  return {
    search: (event) => {
      dispatch(searchPost(event.target.value));
    },
  }
}
//connect the component with redux
export default connect(null, mapDispatchToProps)(SearchBox);
