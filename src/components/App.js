import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Aside from './Aside'
import Items from './Items'
import Comments from './Comments'

import './App.css'

import {
  createItem,
  removeItem,
  setActiveItem,
  addComment
} from '../actions/actions'


const App = props => {
  return (
    <div className="mainApp">
      <Aside />
      <div className="itemContainer">
        <Items
          active={props.active}
          items={props.items}
          addItem={props.createItem}
          removeItem={props.removeItem}
          setActive={props.setActiveItem}
        />
        <Comments
          active={props.active}
          items={props.items}
          addComment={props.addComment}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.items,
    active: state.active
  }
}

App.propTypes = {
  active: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  createItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
  createItem,
  removeItem,
  setActiveItem,
  addComment
})(App)
