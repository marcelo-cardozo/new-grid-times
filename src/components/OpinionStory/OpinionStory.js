import React from 'react';
import styled from 'styled-components/macro';
import {QUERIES} from "../../constants";

const OpinionStory = ({ id, title, author, avatar, ...delegated }) => {
  return (
    <a {...delegated} href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  margin-left: 16px;
  margin-bottom: 16px;
  float: right;

  @media ${QUERIES.tabletOnly} {
    margin-left: revert;
    margin-bottom: revert;
    float: revert;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
