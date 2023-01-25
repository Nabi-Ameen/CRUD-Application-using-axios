import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import View from './View'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Model from './Model';

const MainCRUD = () => {
  const Api_Url = 'https://dummyjson.com'
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');
  const [show, setShow] = useState(false);
  const [type, setType] = useState();

  const handleClose = () => setShow(false);

  const fetchPosts = () => {
    return axios.get(`${Api_Url}/posts`)
      .then((res) => {
        console.log('res', res.data.posts);
        setPosts(res.data.posts)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleClick = (id, type) => {
    console.log('click--', id, '--type--', type);
    setType(type)
    setShow(true);
    singlePostFetchData(id)
  }

  const singlePostFetchData = (id) => {
    return axios.get(`${Api_Url}/posts/${id}`)
      .then((response) => {
        // console.log(response.data)
        setPost(response.data)
      }).catch((error) => {
        console.log(error);
      })
  }

  const handleFormSubmit = (title, body, id) => {
    return axios.put(`${Api_Url}/posts/${id}`, {
      title,
      body,
    }).then((response) => {
      console.log(response);
      alert('your post is successfully updated')
      setShow(false);
    })
  }

  const handleRemove = (id) => {
    return axios.delete(`${Api_Url}/posts/${id}`).then((response) => {
      console.log(response);
      alert('your post is successfully remove')
      setShow(false);
    })
  }

  const handleFormSubmitNew = (title, body) => {
    return axios.post(`${Api_Url}/posts/add`, {
      title,
      body,
      userId: 5
    }).then((response) => {
      console.log(response);
      alert('your post is successfully created')
      setShow(false);
    })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" className='mb-1' onClick={() => {
            handleClick(0, "create")
          }}>Create</Button>
          <br />
          <View posts={posts} handleClick={handleClick} />
          <Model handleFormSubmitNew={handleFormSubmitNew} handleRemove={handleRemove} handleFormSubmit={handleFormSubmit} show={show} post={post} handleClose={handleClose} type={type} />
        </Col>
      </Row>
    </Container>
  )
}

export default MainCRUD