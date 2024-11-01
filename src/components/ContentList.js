import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useMediaStore from './store/mediaStore';

const statusOptions = ['All', 'Published', 'Draft', 'Scheduled'];

const ContentList = () => {
    const { mediaItems, fetchMediaItems } = useMediaStore();
    const [selectedStatus, setSelectedStatus] = useState('All');

    useEffect(() => {
        fetchMediaItems();
    }, [fetchMediaItems]);

    //handle status change
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };
    //filter media items by selected status
    const filteredItems = selectedStatus === 'All' ? mediaItems : mediaItems.filter((item) => item.status === selectedStatus)

    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <h3>Media Content List</h3>
                {/* <Link className='btn btn-primary'>Add New Content</Link> */}

            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="StatusFilter" className="form-label">Filter by Status</label>
                <select
                    id="StatusFilter"
                    className="form-select"
                    value={selectedStatus}
                    onChange={handleStatusChange}>
                    {statusOptions.map((status) => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
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