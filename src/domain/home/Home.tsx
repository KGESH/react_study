import React from 'react';
import ProductContainer from 'components/product-container/ProductContainer';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

const GET_PEOPLE = gql`
  query {
    people(id: "1") {
      id
      name
      age
      gender
    }
  }
`;

type gProps = {
  id: string;
  name: string;
  age: number;
  gender: string;
};

const Home = () => {
  const { loading, data, error } = useQuery(GET_PEOPLE);
  if (error) {
  }
  console.log(data);

  if (data?.getPerson) {
    console.log(`id: ${data.getPerson.id}`);
    console.log(`name: ${data.getPerson.name}`);
    console.log(`age: ${data.getPerson.age}`);
    console.log(`gender: ${data.getPerson.gender}`);
  }

  return (
    <>
      <div className='home'>
        <h1 className='home__title'>This is title</h1>
      </div>

      <ProductContainer />
    </>
  );
};
export default Home;
