var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <meta name="viewport" content="width=device-width"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/stylesheets/style.css"/>
            </head>
            <body>{this.props.children}</body>
            </html>
        );
    }
}

module.exports = DefaultLayout;