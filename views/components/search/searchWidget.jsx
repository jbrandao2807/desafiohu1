var React = require('react');

var SearchHeader = require('./searchHeader');
var SerachAutocomplete = require('./searchAutocomplete');
var ReactBootstrap = require('react-bootstrap');

var FormControl = ReactBootstrap.FormControl;
var InputGroup = ReactBootstrap.InputGroup;
var Glyphicon = ReactBootstrap.Glyphicon;
var ControlLabel = ReactBootstrap.ControlLabel;

class SearchWidget extends React.Component {

    onChangeLocation(){
        console.log('teste');
    }

    render() {
        return (
            <div className="search-widget">
                <SearchHeader />
                <div className="form">
                    <p className="subtitle">+ 170.000 hotéis, pousadas e resorts no mundo todo.</p>
                    <div className="location col-sm-4">
                        <div className="col-sm-12">
                            <ControlLabel>Quer ficar onde?</ControlLabel>
                        </div>
                        <div className="col-sm-12">
                            <SerachAutocomplete wrapperStyle="location"/>
                        </div>
                    </div>
                    <div className="period  col-sm-8">
                        <div className="col-sm-12">
                            <ControlLabel>Quando? (Entrada e Saída)</ControlLabel>
                        </div>
                        <div className="col-sm-6">
                            <InputGroup bsStyle="begin">
                                <InputGroup.Addon><Glyphicon glyph="calendar"/></InputGroup.Addon>
                                <FormControl placeholder="entrada" type="date"/>
                            </InputGroup>
                        </div>
                        <div className="col-sm-6">
                            <InputGroup bsStyle="finish">
                                <InputGroup.Addon><Glyphicon glyph="calendar"/></InputGroup.Addon>
                                <FormControl placeholder="saída" type="date"/>
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