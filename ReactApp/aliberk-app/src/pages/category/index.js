import React from 'react';
import DataTable from '../../components/common/data-table';
import { connect } from 'react-redux';
import { TYPE_CATEGORIES,loadDataActionCreator } from '../../actions'

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     axios.get('http://178.128.248.160:81/api/category', {
    //         headers: {
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjYTc5NjVhLTk3NWQtNGNiOC05OGNjLTIzZDg5Y2M5YzU3YiIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1ODMzMjAxNjksImV4cCI6MTU4MzMyMTA2OSwiaWF0IjoxNTgzMzIwMTY5fQ.iqR3tH0zT34VFOSH4_6Zd7T67Ld-4gF8yPLLFdrdcFA'
    //         }
    //     })
    //         .then(res => this.setState({categories:res.data}))
    //         .catch(e => console.log(e));
    // }

    componentDidMount = () => this.props.dispatch(loadDataActionCreator(TYPE_CATEGORIES))

    render() {
        return <div className="ui container">
            <DataTable headers={['Id', 'Name', 'Display Order']} {...this.props.categories} />
        </div>;
    }
}
const mapStateToProps = (state) => {
    return { categories: state.categories }
}

export default connect(mapStateToProps)(Category);