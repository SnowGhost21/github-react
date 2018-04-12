import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: null
        }

        this.onSubmitClicked = this.onSubmitClicked.bind(this)
    }

    onSubmitClicked(user) {
        {this.props.goToHomeProfile(this.state.userName) }
        <Link to={`/repositories`} />
    }

    render() {
        const styles = {
            button: {
                marginTop: 30,
                width: 150,
                height: 50,
            },

            container: {
                display: 'flex',
                flexDirection: 'column',
                margin: 12,
            }
        }
        return (
            <div style={styles.container}>
                <TextField hintText="Digite seu GithubUser" errorText="Este campo é obrigado" onChange={(object, newValue) => {
                    this.setState({ userName: newValue })
                }} />

                <RaisedButton
                    label="Github Link"
                    secondary={true}
                    style={styles.button}
                    onClick={() => this.onSubmitClicked()}
                    icon={<FontIcon className="muidocs-icon-custom-github" />} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

})


const mapToDispatchProps = dispatch => ({
    goToHomeProfile: (user) => {
        dispatch(push(`repositories/${user}`))
    }
})


export default connect(mapStateToProps, mapToDispatchProps)(Home);


