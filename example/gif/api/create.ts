import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GlobalFonts, createCanvas } from '@napi-rs/canvas';
import GIFEncoder from 'gifencoder';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { address = '0xa', value = '0' } = req.query;
  const width = 512;
  const height = 512;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const fontPath = path.join(process.cwd(), 'assets/fonts', 'Roboto-Bold.ttf');
  GlobalFonts.registerFromPath(fontPath, 'CustomFont');
  console.log(GlobalFonts.families);

  const encoder = new GIFEncoder(width, height);
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(100);
  encoder.setQuality(10);

  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'white';
    ctx.font = '50px Roboto';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    console.log(`Address: ${address}`, `Value: ${value}`);
    ctx.fillText(`Address: ${address}`, width / 2, height / 2 - 50);
    ctx.fillText(`Value: ${value} ETH`, width / 2, height / 2 + 50);

    ctx.strokeStyle = `hsl(${i * 36}, 50%, 50%)`;
    ctx.lineWidth = 10;
    ctx.strokeRect(50, 50, width - 100, height - 100);

    const frameData = ctx.getImageData(0, 0, width, height).data;
    encoder.addFrame(frameData);
  }

  encoder.finish();

  const gifBuffer = encoder.out.getData();

  res.setHeader('Content-Type', 'image/gif');
  res.send(Buffer.from(gifBuffer));
}
