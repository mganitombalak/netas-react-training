import React from 'react';
import axios from 'axios';
import DataTable from '../../components/common/data-table';

class Category extends React.Component {
    state = { categories: null }
    componentDidMount() {
        axios.get('http://178.128.248.160:81/api/category', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODMzMTg1ODQsImV4cCI6MTU4MzMxOTQ4NCwiaWF0IjoxNTgzMzE4NTg0fQ.abo3GPA4pL-TjJGTT31DPwW4x-TsAUqPAl6a21IPLis'
            }
        })
            .then(res => this.setState({categories:res.data}))
            .catch(e => console.log(e));
    }

    render() { return <div className="ui container">
        <DataTable headers={['Id','Name','CreatedAt']} {...this.state.categories}/>
    </div>; }
};
export default Category;