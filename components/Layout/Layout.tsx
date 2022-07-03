import React from 'react';
import Images from 'next/image';
import { Audio } from 'react-loader-spinner';
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
      <div>
        <Link href="/my-pokemon">
          <Styled.MyPokemon>
            <Images
              src="/icon-192x192.png"
              alt="My Pokemon"
              width="32px"
              height="32px"
            />
            <span>My Pokemon</span>
          </Styled.MyPokemon>
        </Link>
      </div>
    </Styled.Header>
    <Styled.Content>
      {loading && (
        <Styled.LoadingContainer>
          <Audio color="#ffcb05" height={200} width={200} />
        </Styled.LoadingContainer>
      )}
      <div>{children}</div>
    </Styled.Content>
  </Styled.Container>
);

export default Component;
