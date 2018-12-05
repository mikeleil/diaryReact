import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const ItemList = ({ items, active, removeItem, setActive }) => {
  const handleDelete = (e, item) => {
    e.stopPropagation()
    e.preventDefault()

    if (active === item.id) {
      const arr = [...items]
      const newActive = arr.filter(elem => elem.id !== item.id)
      setActive(newActive.length ? newActive[0].id : 0)
      return removeItem(item.id)
    } else {
      return removeItem(item.id)
    }
  }

  return (
    <ul className="itemUl">
      {items.map(item => (
        <li
          key={item.id}
          className={item.id === active ? 'active' : 'noactive'}
          onClick={() => setActive(item.id)}
        >
          <div>
            <h3 className="itemsTitle">{item.title}</h3>
            <span className="itemsSpan">{item.numComments}</span>
          </div>
          <button className="deleteButton" onClick={e => handleDelete(e, item)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList
