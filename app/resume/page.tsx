import PDFParser from "@/actions/PDFParser"
import Image from "next/image";

export default async function ResumePage() {
  const resume = await PDFParser();
  return (
    <div className="container mx-auto px-4 pt-4">
      {resume.pages.map((page) => (
        <div key={page.pageNumber} className="last:mt-8">
          <Image
            src={page.dataUrl}
            alt={`Resume page ${page.pageNumber}`}
            width={page.width}
            height={page.height}
            className="border-border border-4 shadow-2xl shadow-accent-foreground/50 mx-auto"
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}
