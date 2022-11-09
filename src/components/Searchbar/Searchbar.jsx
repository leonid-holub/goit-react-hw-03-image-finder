import React from 'react';
import css from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    q: '',
  };

  handleInput = e => {
    this.setState({
      q: e.currentTarget.value.trim().toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.q === '') {
      alert('Please enter something');
      return;
    }

    this.props.onSubmit(this.state.q);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.q !== nextState.q;
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className="button-label">Search</span>
          </button>

          <input
            name="query"
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
