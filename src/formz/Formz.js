import React from 'react';
import wretch from "wretch"
import CssBaseline from '@material-ui/core/CssBaseline';
import FormzCard from './FormzCard';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const FORMZ_API_URL = 'http://';

export const STATUSES = {
    idle: 'IDLE',
    loading: 'LOADING',
    success: 'SUCCESS',
    error: 'ERROR'
};

const FormzItem = ({id, name, description, dateCreated}) => (
    <React.Fragment>
        <CssBaseline />
        
    </React.Fragment>
)


class Formz extends React.Component {

    static PropTypes = {
    }

    state = {
        formz: [],
        formzStatus: STATUSES.idle
    }

    componentWillMount() {
        wretch(FORMZ_API_URL)
        .query({
            // TODO: post the user info here, form id, user auth
        })
        .get()
        .json(response => {
            this.setState({
                formz: response.data,
                formzStatus: STATUSES.success
            });
        })
        .catch(() => {
            this.setState({
                formzStatus: STATUSES.error
            });
        });
    }

    render() {
        return (
            <div>
                {/* return cards of the form in an array map or foreach */}
                <Fab color="primary" aria-label="Add">
                    <AddIcon />
                </Fab>
                {
                    this.state.formz.map(form => 
                        <FormzCard 
                            id={form.key}
                            name={form.name}
                            description={form.description}
                            dateCreated={form.dateCreated}
                        />
                    )
                }
            </div>
        )
    }
}

export default Formz;
