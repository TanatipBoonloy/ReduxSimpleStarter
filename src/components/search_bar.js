import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_key: ''
        };
    }

    input = null;

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
              <input ref={ (elm) => this.input = elm }
                     defaultValue={ search_key }
                     onKeyPress={ (target) => {
                                      if (target.key === 'Enter') {
                                          this.onInputChange(this.input.value)
                                      }
                                  } } />
            </div>
            );
    }
}

export default SearchBar