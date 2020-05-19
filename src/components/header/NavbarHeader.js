import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
import * as styles from "./styles";

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <h1>Allocine</h1>
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar();
          }}
        ></FaAlignRight>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
