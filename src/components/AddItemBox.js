import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import './App.css'

function nextItemId(arr) {
    const test = id => arr.findIndex(elem => elem.id === id)
  
    let nextId = arr.length
    let result = test(nextId)
  
    while (result !== -1) {
      nextId++
      result = test(nextId)
    }
    return nextId
}

const AddItemBox = ({ items, addItem }) => {
  const handleAddItem = e => {
    e.preventDefault()
    console.log('item',$('.addItemInpt').val())
    addItem(nextItemId(items), $('.addItemInpt').val());
    $('.addItemInpt').val('')
  }

  return (
    <form className="itemContainerInput">
      <input className="addItemInpt"
        placeholder="Type name here ..."
        type="text"
      />
      <button className="addItemButton" onClick={handleAddItem}>Add new</button>
    </form>
  )
}

AddItemBox.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired
}

export default AddItemBox
