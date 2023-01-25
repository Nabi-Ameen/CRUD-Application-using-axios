import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import Edit from './Edit';
import Remove from './Remove';
import Create from './Create';

const Model = ({ show, handleClose, type, post, handleRemove, handleFormSubmit, handleFormSubmitNew }) => {

    const conditionalRender = () => {
        let _type = type
        if (_type === 'view') {
            return (
                <>
                    {
                        post && post.body ? post.body : "No title"
                    }
                    <br />
                    {
                        post && post.tags && post.tags.length > 0 ? post.tags.map((tag) => {
                            return <Badge bg="secondary" className='mx-1 py-2' key={tag}>{tag}</Badge>
                        }) : "No tags"
                    }
                </>
            )
        } else if (_type === 'edit') {
            return <Edit handleFormSubmit={handleFormSubmit} post={post} handleClose={handleClose} />
        } else if (_type === 'create') {
            return <Create handleFormSubmitNew={handleFormSubmitNew} />
        } else if (_type === 'remove') {
            return <Remove handleRemove={() => {
                handleRemove(post.id)
            }} />
        } else {
            return
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h5>
                        {
                            post && post.title ? post.title : type && type === 'create'? 'create post' : "No title"
                        }
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {conditionalRender()}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default Model
