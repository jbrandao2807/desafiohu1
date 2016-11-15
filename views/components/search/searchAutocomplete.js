var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var FormControl = ReactBootstrap.FormControl;
var InputGroup = ReactBootstrap.InputGroup;
var Glyphicon = ReactBootstrap.Glyphicon;
var ControlLabel = ReactBootstrap.ControlLabel;


class SearchAutoComplete extends React.Component {

    autocompleteLocation(){
        console.log('autocompleteLocation');
    }
    render() {
        return (
            <div>
                <InputGroup bsStyle={this.props.wrapperStyle}>
                    <InputGroup.Addon><Glyphicon glyph="map-marker"/></InputGroup.Addon>
                    <input onChange={this.autocompleteLocation} type="text" placeholder="cidade ou hotel" className="form-control"/>
                </InputGroup>
            </div>

        );
    }
}

module.exports = SearchAutoComplete;