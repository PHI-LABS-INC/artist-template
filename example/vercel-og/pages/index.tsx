import Head from 'next/head';

export default function Page() {
  return (
    <div>
      <Head>
        <meta name='og:title' content='Vercel Edge Network' />
        <meta name='og:description' content='Vercel Edge Network' />
        <meta
          name='og:image'
          content='https://vercelog-zak.vercel.app/api/static?address=0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce&value=1'
        />
      </Head>
    </div>
  );
}
