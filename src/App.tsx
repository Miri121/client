import { useSignal } from '@preact/signals-react';
import { Document, Page } from 'react-pdf';
import { Box } from '@mui/material';
import './App.css'

function App() {

  return (
    <>
       <Box style={{ height: '300px', overflow: 'auto' }}>
       <Document file='/production.pdf'>
        <Page pageNumber={1} />
      </Document>
    </Box>
    </>
  )
}

export default App
