import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import View from './View'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const MainCRUD = () => {
  const Api_Url = 'https://dummyjson.com'
  const [posts, setPosts] = useState([]);


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
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary">Edit</Button>
          <br />
          <View posts={posts} handleClick={handleClick} />
        </Col>
      </Row>
    </Container>
  )
}

export default MainCRUD