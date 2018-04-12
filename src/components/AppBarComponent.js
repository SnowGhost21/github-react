import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setTargetRepository } from '../actions/Actions'
import { Circle } from 'react-shapes'

class AppBarComponent extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getRepository(id)
    }

    render() {
        const { repository, reset, item, ...props, } = this.props

        const styleAvatar = {
            width: 100,
            height: 100,
            marginTop: 50,
            borderRadius: 50,
            marginLeft: 15,
        }

        const profile = {
            textAlign: 'right',
        }

        console.log('AppBarComponent', item)
        const styles = {
            title: {
                cursor: 'pointer'
            }
        }
        return (
            <div>
                {item &&
                    <div className="Profile">
                        <AppBar title={item.name} iconClassNameRight="muidocs-icon-navigation-expand-more" />
                        <div className="ProfilePhoto" stlye={profile}>
                            <img src={item.owner.avatar_url} alt="" style={styleAvatar} />

                            {item.description &&
                                <p>{item.description}</p>}

                        </div>

                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.item,
        repository: state.repository
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getRepository: (id) => {
            dispatch(setTargetRepository(id))
        }
    }
}

AppBarComponent.propTypes = {
    repository: PropTypes.object,
    getRepository: PropTypes.func,
    match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);

