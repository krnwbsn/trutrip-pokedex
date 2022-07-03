import React from 'react';
import Images from 'next/image';
import * as Styled from './styles';
import Link from 'next/link';
import Badge from '@components/Badge';
import type { ICard } from '@interfaces/icard';

const Card = ({ color, name, pokemonId, id, types }: ICard) => (
  <Link href={`/${name}`}>
    <Styled.Container color={color}>
      <Images
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        loading="lazy"
        width="82px"
        height="82px"
      />
      <Styled.Content>
        <Styled.PokemonId>{pokemonId}</Styled.PokemonId>
        <Styled.PokemonName>{name}</Styled.PokemonName>
        <Badge types={types} />
      </Styled.Content>
    </Styled.Container>
  </Link>
);

export default Card;
