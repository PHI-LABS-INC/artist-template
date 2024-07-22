import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const address = searchParams.get('address');
  const value = searchParams.get('data');

  if (!address || !value) {
    return new Response('Invalid address or value.', { status: 400 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        👋 Hello 你好 नमस्ते こんにちは สวัสดีค่ะ 안녕 добрий день Hallá
      </div>
    ),
    {
      width: 512,
      height: 512,
    },
  );
}
