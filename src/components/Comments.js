import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './App.css'


const Comments = ({ active, items, addComment }) => {
  if (items.length) {
    const itemComments = items.find(item => item.id === active).comments
    return (
      <div className="comments">
        <h1 className="commentsTitle">{`Comments #${active + 1}`}</h1>
        <CommentList comments={itemComments} />
        <CommentForm
          active={active}
          comments={itemComments}
          addComment={addComment}
        />
      </div>
    )
  } else {
    return (
      <div className="comments">
        <h1 className="commentsTitle">Comments #</h1>
      </div>
    )
  }
}

Comments.propTypes = {
  active: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
}

export default Comments
