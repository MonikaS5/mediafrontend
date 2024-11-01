import React from 'react'
import { Link } from 'react-router-dom'

const ContentList = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <h3>Media Content List</h3>
                <Link className='btn btn-primary'>Add New Content</Link>

            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default ContentList