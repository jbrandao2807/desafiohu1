var React = require('react');
var DefaultLayout = require('./layouts/default');
var SearchWidget = require('./components/search/searchWidget');

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <SearchWidget />
            </DefaultLayout>
        );
    }
}

module.exports = Index;