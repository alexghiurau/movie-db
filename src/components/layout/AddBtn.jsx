import React from 'react';

// The Add button, used for adding movies
// Toggles a modal
const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-movie-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'>
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
