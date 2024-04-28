import { useSignal } from '@preact/signals-react';
import { Document, Page } from 'react-pdf';
import { Box } from '@mui/material';
import { pdfjs } from 'react-pdf';
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function App() {

  return (
    <>
       <Box style={{ height: '300px', overflow: 'auto' }}>
       <Document file='/product.pdf'>
        <Page pageNumber={1} />
      </Document>
    </Box>
    </>
  )
}

export default App
