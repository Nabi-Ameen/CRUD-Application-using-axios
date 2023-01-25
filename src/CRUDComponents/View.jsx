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
                                    return <Badge bg="secondary" className='mx-1 py-2' key={tag}>{tag}</Badge>
                                }) : 'No tags found'
                            }
                        </td>
                        <td className='text-center'>
                            <Button variant="info" onClick={() => {
                                handleClick(post.id, "view")
                            }}>View</Button>
                            <Button variant="primary" className='mx-2' onClick={() => {
                                handleClick(post.id, "edit")
                            }}>Edit</Button>
                            <Button variant="danger" onClick={() => {
                                handleClick(post.id, "remove")
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
                    ? <Table striped bordered hover size='sm'>
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