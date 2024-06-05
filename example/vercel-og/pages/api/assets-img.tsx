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

  const imageData = await fetch(new URL('../../assets/p.png', import.meta.url)).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#fff',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt='P'
          width={255}
          height={225}
          src={`data:image/png;base64,${Buffer.from(imageData).toString('base64')}`}
          style={{ margin: '0 75px' }}
        />
        <div
          style={{
            fontSize: 60,
            marginTop: 30,
            lineHeight: 1.8,
          }}
        >
          Phi Protocol
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  );
}
