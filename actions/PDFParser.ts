'use server'

import { PDFParse } from "pdf-parse"

export default async function PDFParser() {
  const parser = new PDFParse({ url: "public/resume.pdf" })
  const result = await parser.getScreenshot({ scale: 1.5 });

  await parser.destroy();
  return result
}
