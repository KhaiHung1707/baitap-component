import { Alert } from "bootstrap"

import { Component } from 'react';
class CallAlerts extends Component {
    render() {
        return <div class="alert alert-warning" role="alert">
            {this.props.text}
        </div>
    }
}
export default CallAlerts