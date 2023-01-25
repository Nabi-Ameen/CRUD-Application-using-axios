import React,{useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Edit = ({ post, handleFormSubmit }) => {
  const inputEl = useRef('')
  const inputElBody = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault();
    let updateTitle = inputEl.current.value;
    let updateBody = inputElBody.current.value;
    handleFormSubmit(updateTitle, updateBody, post.id)

    // console.log('form submit', updateTitle, '_____', updateBody);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="titleEdit">
        <Form.Label>Title</Form.Label>
        <Form.Control ref={inputEl} defaultValue={post.title} type="text" placeholder="Enter title" />
        <Form.Text className="text-muted">
          Please update title.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="bodyEdit">
        <Form.Label>body</Form.Label>
        <Form.Control ref={inputElBody} defaultValue={post.body} type="text" placeholder="Enter body text" />
        <Form.Text className="text-muted">
          Please update body.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Update data
      </Button>
    </Form>
  )
}

export default Edit