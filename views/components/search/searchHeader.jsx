var React = require('react');


class SearchHeader extends React.Component {


    render() {
        return (
            <div className="header">
                <h1 className="title">
                    <span className="hotel-icon"><img src="images/hotel-icon.png"/></span> Hotéis</h1>
            </div>
        );
    }
}

module.exports = SearchHeader;