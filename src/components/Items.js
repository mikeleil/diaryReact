import React from 'react'
import PropTypes from 'prop-types'
import AddItemBox from './AddItemBox'
import ItemList from './ItemList'
import './App.css'


const Items = ({ active, items, addItem, removeItem, setActive }) => {
  return (
    <div className="itemsContainer itemsCon">
      <h1 className="titleItems">items</h1>
      <AddItemBox addItem={addItem} items={items} />
      <ItemList
        items={items}
        active={active}
        removeItem={removeItem}
        setActive={setActive}
      />
    </div>
  )
}

Items.propTypes = {
  active: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired
}

export default Items
