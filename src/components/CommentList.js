import React from 'react'
import PropTypes from 'prop-types'
import './App.css'




const CommentList = ({ comments }) => {
  return (
    <ul className="ulCommentList">
      {comments.map((item, index) => (
        <li className="commentLi" key={`c-${index}`}>
          <div className="itemLogo" num={index} />
          <div className="commetItem">{item}</div>
        </li>
      ))}
    </ul>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
