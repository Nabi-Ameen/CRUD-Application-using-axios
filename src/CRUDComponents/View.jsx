import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const View = ({ posts, handleClick }) => {

    const generatePost = () => {
        return (
            posts && posts.length > 0 ? posts.map((post) => {
                return (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>
                            {
                                post.tags && post.tags.length > 0 ? post.tags.map((tag) => {
                                    return (
                                        <Badge bg="secondary" key={tag}>
                                            {tag}
                                        </Badge>
                                    )
                                }) : 'No tags found'
                            }
                        </td>
                        <td>
                            <Button variant="info" onClick={() => {
                                handleClick(post.id, "Information")
                            }}>View</Button>
                            <Button variant="primary" onClick={() => {
                                handleClick(post.id, "Edit")
                            }}>Edit</Button>
                            <Button variant="danger" onClick={() => {
                                handleClick(post.id, "Remove")
                            }}>Remove</Button>
                        </td>
                    </tr>
                )
            }) : "No data found"
        )
    }
    return (
        <div>
            {
                posts && posts.length > 0
                    ? <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Tags</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {generatePost()}

                        </tbody>
                    </Table> : "No data fetch"
            }
        </div>
    )
}

export default View