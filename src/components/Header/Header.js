import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ResponsiveHeader>
            <Logo />
          </ResponsiveHeader>
          <ActionGroupSmall>
            <button>
              <User size={24} />
            </button>
          </ActionGroupSmall>
          <ActionGroupLarge>
            <Button>Subscribe</Button>
            <Link>Alread a subscriber?</Link>
          </ActionGroupLarge>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    margin-bottom: 80px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    background: unset;
    color: var(--color-gray-900);
    flex: 1;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.desktopAndUp} {
    justify-content: revert;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupSmall = styled(ActionGroup)`
  display: flex;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const ActionGroupLarge = styled(ActionGroup)`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const Link = styled.button`
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-decoration-line: underline;
  color: var(--gray-900);
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const ResponsiveHeader = styled(MainHeader)`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: flex;
    margin: 0;
  }
`;

export default Header;
