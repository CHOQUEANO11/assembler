import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenuBar(e) {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className=" navbar-item"><strong>ALAMEDA ANANINDEUA</strong></Link>
              <button
                type="button"
                onClick={e => this.toggleMenuBar(e)}
                className={`navbar-burger ${open ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
              <Link className="navbar-item" to="/home" onClick={() => this.closeMenuBar()}>
                Início
              </Link>
              <Link className="navbar-item" to="/global-local-css" onClick={() => this.closeMenuBar()}>
                Círculo de Oração
              </Link>
              <Link className="navbar-item" to="/typescript-counter" onClick={() => this.closeMenuBar()}>
                Conjunto dos Senhores
              </Link>
              <Link className="navbar-item" to="/skeleton-loading" onClick={() => this.closeMenuBar()}>
                Conjunto dos Jovens
              </Link>
              <Link className="navbar-item" to="/image-optimization" onClick={() => this.closeMenuBar()}>
                Conjunto das Crianças
              </Link>
              <Link className="navbar-item" to="/contribute" onClick={() => this.closeMenuBar()}>
                Avisos
              </Link>
              <Link style={{ color: 'blue' }} className="navbar-item" to="/login" onClick={() => this.closeMenuBar()}>
                Area Administrativa
              </Link>
              {/* <a
                className="navbar-item has-text-danger"
                href="https://www.reactpwa.com"
                onClick={() => this.closeMenuBar()}
              >
                Visit ReactPWA.com
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
