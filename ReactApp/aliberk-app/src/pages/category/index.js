import React from 'react';
import axios from 'axios';
import DataTable from '../../components/common/data-table';

class Category extends React.Component {
    state = { categories: null }
    componentDidMount() {
        axios.get('http://178.128.248.160:81/api/category', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODMzMjAxNjksImV4cCI6MTU4MzMyMTA2OSwiaWF0IjoxNTgzMzIwMTY5fQ.iqR3tH0zT34VFOSH4_6Zd7T67Ld-4gF8yPLLFdrdcFA'
            }
        })
            .then(res => this.setState({categories:res.data}))
            .catch(e => console.log(e));
    }

    render() { return <div className="ui container">
        <DataTable headers={['Id','Name','Display Order']} {...this.state.categories}/>
    </div>; }
};
export default Category;