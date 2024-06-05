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
          alt='Vercel'
          width={255}
          height={225}
          src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE2IiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU3LjUgMEwxMTUgMTAwSDBMNTcuNSAweiIgLz48L3N2Zz4='
          style={{ margin: '0 75px' }}
        />
        <div
          style={{
            fontSize: 60,
            marginTop: 30,
            lineHeight: 1.8,
          }}
        >
          Vercel Edge Network
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  );
}
