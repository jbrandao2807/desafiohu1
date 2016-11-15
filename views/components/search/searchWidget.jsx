var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var FormControl = ReactBootstrap.FormControl;
var InputGroup = ReactBootstrap.InputGroup;
var Glyphicon = ReactBootstrap.Glyphicon;
var ControlLabel = ReactBootstrap.ControlLabel;


class SearchWidget extends React.Component {
    render() {
        return (
            <div className="search-widget">
                <div className="header">
                    <h1 className="title">
                        <span className="hotel-icon"><img src="images/hotel-icon.png"/></span> Hotéis</h1>
                </div>
                <div className="form">
                    <p className="subtitle">+ 170.000 hotéis, pousadas e resorts no mundo todo.</p>
                    <div className="location col-sm-4">
                        <div className="col-sm-12">
                            <ControlLabel>Quer ficar onde?</ControlLabel>
                        </div>
                        <div className="col-sm-12">
                            <InputGroup bsStyle="location">
                                <InputGroup.Addon><Glyphicon glyph="map-marker"/></InputGroup.Addon>
                                <FormControl placeholder="cidade ou hotel" type="text"/>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="period  col-sm-8">
                        <div className="col-sm-12">
                            <ControlLabel>Quando? (Entrada e Saída)</ControlLabel>
                        </div>
                        <div className="col-sm-6">
                            <InputGroup bsStyle="begin">
                                <InputGroup.Addon><Glyphicon glyph="calendar"/></InputGroup.Addon>
                                <FormControl placeholder="Enter text" type="date"/>
                            </InputGroup>
                        </div>
                        <div className="col-sm-6">
                            <InputGroup bsStyle="finish">
                                <InputGroup.Addon><Glyphicon glyph="calendar"/></InputGroup.Addon>
                                <FormControl placeholder="Enter text" type="date"/>
                            </InputGroup>
                        </div>
                        <div className="col-sm-12">
                            <InputGroup bsStyle="no-date">
                                <FormControl type="checkbox"/>
                                <span>Ainda não defini as datas</span>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="submit-button">
                        <button className="button"><Glyphicon glyph="search"/> Buscar</button>
                    </div>

                </div>
            </div>
        );
    }
}

module.exports = SearchWidget;