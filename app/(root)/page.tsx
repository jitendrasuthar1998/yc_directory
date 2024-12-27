import React from 'react';
import SearchForm from '../../components/SearchForm';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
// import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  // const posts = await client.fetch(STARTUPS_QUERY);
  const params = { search: query || null };
  // get live data without refreshing the web page
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  console.log('posts', posts);

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

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0
            ? posts.map((post: StartupTypeCard) => (
                <StartupCard key={post._id} post={post} />
              ))
            : null}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}

export default Home;
