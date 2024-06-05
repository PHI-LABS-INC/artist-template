import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const address = searchParams.get('address');
  const value = searchParams.get('value');

  if (!address || !value) {
    return new Response('Invalid address or value.', { status: 400 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          alt='avatar'
          width='256'
          // src={`${address}`}
          style={{
            borderRadius: 128,
          }}
        /> */}
        <p>{address}</p>
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  );
}
