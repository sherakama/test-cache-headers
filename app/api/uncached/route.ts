import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Route to fetch all alerts from Storyblok.
 * This is a server action that fetches all alerts from Storyblok and returns them as JSON.
 */
export async function GET() {
  console.log('Running UnCached function...');
  const responseHash = {
    message: 'The uncached time is ' + new Date().toISOString(),
  };

  // const headers = new Headers({
  //   // Tell CDNs to cache the response.
  //   'Netlify-CDN-Cache-Control': 'public, durable, max-age=3600, stale-while-revalidate=86400',
  //   'CDN-Cache-Control': 'public, durable, max-age=3600, stale-while-revalidate=86400',
  //   // Tell browsers not to cache the response.
  //   'Cache-Control': 'public, max-age=0, must-revalidate',
  //   // Tag the response for purging.
  //   'Netlify-Cache-Tag': 'story',
  //   'Cache-Tag': 'story',
  //   // For testing purposes.
  //   'x-test': new Date().toISOString(),
  // });

  return NextResponse.json(responseHash);
}
