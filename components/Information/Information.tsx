import React from 'react';
import Image from 'next/image';
import * as Styled from './styles';

interface IInformation {
  message: string;
}

const Information = ({ message }: IInformation) => (
  <Styled.Container>
    <Styled.ImageContainer>
      <Image
        src="/pikachu.png"
        alt="jumping-pikachu"
        layout="fill"
        objectFit="contain"
      />
    </Styled.ImageContainer>
    <Styled.Header>{message}</Styled.Header>
  </Styled.Container>
);

export default Information;
