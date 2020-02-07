import React from 'react';
import PropTypes from 'prop-types';

function Comment({author, message, likes}){
    return (
        <div>
            <div className='author'>{author}</div>
            <div className='message'>{message}</div>
            <div className='likes'> {likes > 0 ? likes : 'No'} likes </div>
        </div>
    )
}

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string,
    likes: PropTypes.number
}

export default Comment;