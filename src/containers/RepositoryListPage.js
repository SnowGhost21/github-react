import React, { Component } from 'react'
import { fetchData } from '../api/Api'
import { connect } from 'react-redux'
import { fetchBegin, fetchSuccess, fetchError } from '../actions/Actions'
import GridItemComponent from '../components/GridItemComponent'
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { CircularProgress } from 'material-ui';

class RepositoryListPage extends Component {
    constructor(props) {
        super(props)

        this.onRepositoryClicked = this.onRepositoryClicked.bind(this)

    }

    componentDidMount() {
        const user = this.props.match.params.user
        this.props.fetchData(user)
    }


    onRepositoryClicked(item) {
        <Link to={'/repository'} />
    }


    render() {
        const { error, loading, repositories } = this.props
        console.log("App", repositories)

        const styles = {
            progress: {
                justifyContent: 'center',
                alignContent: 'center',
                display: 'flex',
                flex: 1
            }
        }

        if (error) {
            return <div>Error! {error.message}</div>
        }

        if (loading) {
            return (
                <div>
                    <CircularProgress size={60} color={"#ff0000"}thickness={3.5} style={styles.progress}/>
                </div>
            )
        }
        
        return (
            <GridItemComponent items={repositories} selectedItem={this.props.goToProfile} />
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.error,
    repositories: state.repositories,
    loading: state.loading
})

const mapToDispatchProps = dispatch => ({
    fetchData: (user) => {
        dispatch(fetchBegin());
        fetchData(user)
            .then(response => dispatch(fetchSuccess(response)))
            .catch(error => dispatch(fetchError(error)))
    },

    goToProfile: (id) => {
        dispatch(push(`/repository/${id}`))
    }
})



export default connect(mapStateToProps, mapToDispatchProps)(RepositoryListPage);