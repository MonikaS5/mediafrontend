import React from 'react'

const ContentList = () => {
    return (
        <div className='container'>
            <div>
                <h3>Media Content List</h3>
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