import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import './App.css'


const CommentForm = ({ active, comments, addComment }) => {
  const handleSend = e => {
    if (e.ctrlKey && e.charCode === 13 && $('.commentTextarea').val()) {
      addComment(active, $('.commentTextarea').val());
      $('.commentTextarea').val('')
    }
}

const handleSendButton = e => {
    if ( $('.commentTextarea').val() ) {
      addComment(active, $('.commentTextarea').val())
      $('.commentTextarea').val('')
    }
}
$( document ).ready(function() {
    $('.ulCommentList>li').each(function( index ) {
       if(index % 2 ) {
        $( this ).children(":first").css('background-color','#47568c')
       } else{
        $( this ).children(":first").css('background-color','#ff8a00')
       }
      });
});
  return (
    <div>
      <form className="commentForm">
        <div className="itemLogoEmpty" />
        <textarea className="commentTextarea"
          onKeyPress={handleSend}
        />
      </form>
      <div className="commentFormButton">
        <button className="btnCommForm" onClick={handleSendButton}>Add comment</button>
      </div>
    </div>
  )
}

CommentForm.propTypes = {
  active: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
}

export default CommentForm
