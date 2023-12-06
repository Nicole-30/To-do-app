import React, { useState } from 'react';
import Props from './Props';

function Map() {
    const [blog, setBlog] = useState([
        {
            title: 'My new website',
            body: 'lorem ipsum................',
            author: 'Akenji Nicole',
            year: 2020,
            country: 'Canada',
            id: 0
        },
        {
            title: 'My life blog',
            body: 'lorem ipsum................',
            author: 'suh Akenji',
            year: 2010,
            country: 'Cameroon',
            id: 1
        },
        {
            title: 'personal mission statement',
            body: 'lorem ipsum................',
            author: 'ALX',
            year: 2022,
            country: 'Cambodia',
            id: 2
        },
        {
            title: 'My shopping site',
            body: 'lorem ipsum................',
            author: 'Sophia',
            year: 2000,
            country: 'Nigeria',
            id: 3
        },
        {
            title: 'My personal blog',
            body: 'lorem ipsum................',
            author: 'Sophia',
            year: 2001,
            country: 'USA',
            id: 3
        }
    ])

    const handleDelete = (id) => {
        const newBlog = blog.filter(blog => blog.id !== id);
        setBlog(newBlog)
    }

    return (
        <div>
            <Props nic={blog} title='all blogs!' />
            <Props nic={blog.filter((blog) => blog.author === 'Sophia')} title='Sophias blog' />
            <Props nic={blog} title='blogs to delete!' handleDelete={handleDelete} />
            {/* <Props nice={setBlog}/> */}

        </div>
    );
}

export default Map;
