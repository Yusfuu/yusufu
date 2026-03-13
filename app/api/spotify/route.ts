import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

let cachedToken: { token: string; expires: number } | null = null;

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expires)
    return { access_token: cachedToken.token };

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  });
  const response = await res.json();

  if (response.access_token && response.expires_in) {
    cachedToken = {
      token: response.access_token,
      expires: Date.now() + (response.expires_in - 60) * 1000,
    };
  }

  return response;
}

export async function GET() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return NextResponse.json({ isPlaying: false });
  }
  try {
    const { access_token } = await getAccessToken();
    const res = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: { Authorization: `Bearer ${access_token}` },
        next: { revalidate: 30 },
      },
    );
    if (res.status === 204 || res.status >= 400)
      return NextResponse.json({ isPlaying: false });
    const data = await res.json();
    if (!data?.item) return NextResponse.json({ isPlaying: false });
    return NextResponse.json({
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((a: { name: string }) => a.name).join(', '),
      album: data.item.album.name,
      albumArt: data.item.album.images[0]?.url ?? null,
      songUrl: data.item.external_urls.spotify,
      progress: data.progress_ms,
      duration: data.item.duration_ms,
    });
  } catch {
    return NextResponse.json({ isPlaying: false });
  }
}
