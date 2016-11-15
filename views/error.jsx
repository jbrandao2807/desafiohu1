var React = require('react');

export default class ErrorMessage extends React.Component {
    render() {

        return <div>
            <h1>{this.props.message}</h1>
            <h2>{this.props.status}</h2>
            <pre>{this.props.stack}</pre>
        </div>
    }
}