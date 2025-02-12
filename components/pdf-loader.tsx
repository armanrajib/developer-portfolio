'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

function PDFLoader() {
  const [numPages, setNumPages] = useState<number>(0)

  return (
    <div className='mt-8 max-w-6xl'>
      <Document
        file='/resume/resume.pdf'
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={index} className='border'>
            <Page pageNumber={index + 1} width={1080} />
          </div>
        ))}
      </Document>
    </div>
  )
}

export default PDFLoader
