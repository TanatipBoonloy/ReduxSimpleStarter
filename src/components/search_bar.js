import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_key: ''
        };
    }

    onInputChange(input) {
        this.setState({
            search_key: input
        });
        this.props.onSearchKeywordChange(input);
    }

    render() {
        const {search_key} = this.state;
        return (
            <div className="search-bar">
              <input value={ search_key }
                     onChange={ (event) => this.onInputChange(event.target.value) } />
            </div>
            );
    }
}

export default SearchBar