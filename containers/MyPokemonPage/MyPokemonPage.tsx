import React from 'react';
import Head from 'next/head';
import { defaultPageTitle } from '@utils/constant';
import Layout from '@components/Layout';
import Card from '@components/Card';
import { useGlobalState } from '@context/provider';
import Information from '@components/Information';
import type { IPokemonDataParsed } from '@interfaces/ipokemondata';

const MyPokemonPage = () => {
  const myPokemonState = useGlobalState('myPokemon');

  return (
    <>
      <Head>
        <title key="page-title">{defaultPageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout loading={false}>
        {myPokemonState.length > 0 ? (
          <>
            {myPokemonState?.map(
              ({ id, pokemonId, name, color, types }: IPokemonDataParsed) => (
                <Card
                  color={color}
                  name={name}
                  pokemonId={pokemonId}
                  id={id}
                  types={types}
                  key={`${id}-${name}`}
                />
              )
            )}
          </>
        ) : (
          <Information message="Data Not Found" />
        )}
      </Layout>
    </>
  );
};

export default MyPokemonPage;
