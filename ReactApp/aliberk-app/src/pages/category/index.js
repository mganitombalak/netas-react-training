import React from 'react';
import axios from 'axios';
class Category extends React.Component {
    state = { categories: null }
    componentDidMount() {
        axios.get('http://178.128.248.160:81/api/category', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODMzMTExOTEsImV4cCI6MTU4MzMxMjA5MSwiaWF0IjoxNTgzMzExMTkxfQ.VsDr_XEf_EvOl8eMm0DdrtXo7xviYKmhLYPFvBXXkjQ'
            }
        })
            .then(res => this.setState({categories:res.data}))
            .catch(e => console.log(e));
    }

    render() { return <div>CATEGORY PAGE!</div>; }
};
export default Category;