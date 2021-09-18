import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
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
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </LaptopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>
            Subscribe
          </Button>
          <Anchor href='/somewhere'>Already a subscriber?</Anchor>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
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

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr auto 1fr;

    margin-top: 16px;
  }
`;

const LaptopActionGroup = styled(ActionGroup)`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`
const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    align-self: end;
    justify-self: end;
    
    display: grid;
    justify-items: center;
    gap: 8px;
  }
`

const Anchor = styled.a`
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
  font-family: var(--font-family-serif);
  color: var(--color-gray-900);
`



export default Header;
