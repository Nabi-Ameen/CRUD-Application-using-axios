import React from 'react'
import Button from 'react-bootstrap/Button';

const Remove = ({ handleRemove }) => {
  return (
    <>
      <p>Are you sure you want to be remove this post</p>
      <Button variant="primary" onClick={handleRemove} type="submit">
        Yes
      </Button>
    </>
  )
}

export default Remove