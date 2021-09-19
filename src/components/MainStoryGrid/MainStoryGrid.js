import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StorySecondaryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StyledSecondaryStore key={story.id} {...story} />
          ))}
        </StorySecondaryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryOpinionList>
          {OPINION_STORIES.map((story, index) => (
            <StyledOpinionStory key={story.id} {...story} />
          ))}
        </StoryOpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    column-gap: 0;
    grid-template-columns: 1fr min(252px, 35%);
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }
  
  @media ${QUERIES.laptopAndUp} {
    gap: 0;
    grid-template-columns: 1fr minmax(386px, 35%) minmax(273px, 20%);
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const StyledSecondaryStore = styled(SecondaryStory)``
const StyledOpinionStory = styled(OpinionStory)``

const StorySecondaryList = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledSecondaryStore}:not(:last-of-type) {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const StoryOpinionList = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledOpinionStory}:not(:last-of-type) {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletOnly} {
    padding-left: 4px;
    padding-right: 4px;
    flex-direction: row;
    gap: 32px;
    
    ${StyledOpinionStory} {
      padding-top: revert;
      padding-bottom: revert;
      border-top: revert;
      flex:1;
      min-width: ${176/16}rem;
    }
  }
  
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    padding-left: 4px;
    padding-right: 6px;
    overflow: auto;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
