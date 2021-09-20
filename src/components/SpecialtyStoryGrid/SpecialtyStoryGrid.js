import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES} from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <StyleMiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(auto-fill, minmax(min(190px, 100%), 1fr));
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(auto-fill, minmax(min(170px, 100%), 1fr));
  }
`;

const SportsSection = styled.section`
  @media ${QUERIES.tabletAndUp} {
    overflow: auto;
  }
`;

const StyleMiniStory = styled(MiniStory)``;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(190px, 100%), 1fr));
  
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    
    ${StyleMiniStory} {
      flex: 1;
      min-width: 220px;
    }
  }
  
  @media ${QUERIES.laptopAndUp} {
    padding-left: 6px;
  }
  
`;

export default SpecialtyStoryGrid;
