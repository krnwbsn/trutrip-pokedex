import React from 'react';
import Images from 'next/image';
import Loader from 'react-loader-spinner';
import Link from 'next/link';

import * as Styled from './styles';

export interface ILayout {
  children: JSX.Element;
  loading: boolean;
}

const Component = ({ children, loading }: ILayout) => (
  <Styled.Container>
    <Styled.Header>
      <Link href="/">
        <Images
          src="/pokemon-logo.png"
          alt="Pokemon Logo"
          width="154px"
          height="57px"
        />
      </Link>
    </Styled.Header>
    <Styled.Content>
      {loading && (
        <Styled.LoadingContainer>
          <Loader type="ThreeDots" color="#ffcb05" height={200} width={200} />
        </Styled.LoadingContainer>
      )}
      <div>{children}</div>
    </Styled.Content>
  </Styled.Container>
);

export default Component;
