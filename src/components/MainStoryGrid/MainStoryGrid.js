import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList opinionSection>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
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
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 32px;
  }
  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    gap: 32px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: ${COLORS.gray[300]};
      left: -16px;

      @media ${QUERIES.desktopAndUp} {
        bottom: -195px;
      }
    }
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    position: relative;
  }

  & > *:not([hidden]) + *:not([hidden]) {
    margin-top: 32px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${COLORS.gray[300]};
      left: 0;
      right: 0;
      top: -16px;
      @media ${QUERIES.tabletOnly} {
        content: ${({ opinionSection }) => (opinionSection ? "none" : "")};
      }
    }
  }

  @media ${QUERIES.tabletOnly} {
    flex-direction: ${({ opinionSection }) => opinionSection && "row"};
    gap: ${({ opinionSection }) => opinionSection && "32px"};

    & > * {
      flex: ${({ opinionSection }) => opinionSection && "1"};
    }

    & > *:not([hidden]) + *:not([hidden]) {
      margin-top: ${({ opinionSection }) => opinionSection && 0};
    }
  }
`;

const OpinionSection = styled.section`
  position: relative;
  grid-area: opinion-stories;

  @media ${QUERIES.desktopAndUp} {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: ${COLORS.gray[300]};
      left: -16px;
    }
  }
`;

const AdvertisementSection = styled.section`
  position: relative;
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    &::before {
      content: "";
      position: absolute;
      top: -16px;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${COLORS.gray[300]};
    }
  }
`;

export default MainStoryGrid;
