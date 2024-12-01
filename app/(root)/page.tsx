import React from 'react';
import SearchForm from '../../components/SearchForm';

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, votes on Pitches, and get noticed in virtual
          competitions.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}

export default Home;
