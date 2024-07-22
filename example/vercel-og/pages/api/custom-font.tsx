import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

const font = fetch(new URL('../../assets/TYPEWR__.TTF', import.meta.url)).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const address = searchParams.get('address');
  const value = searchParams.get('data');

  if (!address || !value) {
    return new Response('Invalid address or value.', { status: 400 });
  }
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          fontSize: 100,
          fontFamily: 'Typewriter',
          paddingTop: '100px',
          paddingLeft: '50px',
        }}
      >
        Hello Phi!
      </div>
    ),
    {
      width: 512,
      height: 512,
      fonts: [
        {
          name: 'Typewriter',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
