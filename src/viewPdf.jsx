import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { pdfjs } from 'react-pdf';
import { Button } from 'antd';
import './scss/test.scss';
pdfjs.GlobalWorkerOptions.workerSrc = 'node_modules/react-pdf/node_modules/pdfjs-dist/legacy/build/pdf.worker.js';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFUploader = ({ file }) => {
    const pdfFile = file;
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const onDownloadClick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(pdfFile);
        link.download = pdfFile.name;
        link.click();
    };

    return (
        <>
            {pdfFile && (
                <div>
                    <div className='pdff'>
                        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                            {Array.from(new Array(numPages), (_, i) => (
                                <div key={`page_${i + 1}`}>
                                    <Page pageNumber={i + 1} />
                                    <p>page {i + 1} of {numPages}</p>
                                </div>
                            ))}
                        </Document>
                    </div>
                    <Button onClick={onDownloadClick}>Download PDF</Button>
                </div>
            )}
        </>
    );
};

export default PDFUploader;
