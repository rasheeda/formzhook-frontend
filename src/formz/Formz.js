import React from 'react';
import wretch from "wretch"
import CssBaseline from '@material-ui/core/CssBaseline';
import FormzCard from './FormzCard';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import {FORMZ_API_URL, STATUSES} from '../constants';

const FormzItem = ({id, name, description, dateCreated}) => (
    <React.Fragment>
        <CssBaseline />
        
    </React.Fragment>
)

class Formz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formzData: {},
            formzStatus: STATUSES.idle
        }
    }

    componentWillMount() {
        wretch(FORMZ_API_URL)
        .headers({ "Access-Control-Allow-Origin": "*",
         "Origin": "http://127.0.0.1:5000",
        "crossDomain": true })
        .query({
            // TODO: post the user info here, form id, user auth
        })
        .get()
        .json(response => {
            this.setState({
                formzData: response,
                formzStatus: STATUSES.success
            });

            // console.log('formzData: ' + JSON.stringify(this.state.formzData));
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
                {/* <Fab color="primary" aria-label="Add">
                    <AddIcon />
                </Fab> */}
                {this.state.formzStatus === STATUSES.success &&
                    this.state.formzData.map(form => 
                        <FormzCard 
                            uniqueId={form.id}
                            name={form.name}
                            description={form.description}
                            dateCreated={form.dateCreated}
                            uniqueKey={'hhg78t8t87tf875'}
                            key={form.id}
                        />
                    )
                }
            </div>
        )
    }
}

export default Formz;
