import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

/*
useCdn = true means sanity will catch content for 60 seconds, and then revalidate the content after every 60 seconds.
This is ISR, incremental static regeneration.
 
*/
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
