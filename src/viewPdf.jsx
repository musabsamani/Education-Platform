import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Button } from 'antd';
import './scss/test.scss';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFUploader = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);


    const onFileChange = (event) => {
        setPdfFile(event.target.files[0]);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const goToPrevPage = () => {
        setCurrentPage(currentPage - 1);
    }

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    }

    const onDownloadClick = () => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(pdfFile);
        link.download = pdfFile.name;
        link.click();
    };

    return (
        <>
            <input type="file" onChange={onFileChange} />
            {pdfFile && (
                <div>
                    <nav>
                        <button disabled={currentPage === 1} onClick={goToPrevPage}>
                            Prev
                        </button>
                        <button disabled={currentPage === numPages} onClick={goToNextPage}>
                            Next
                        </button>
                    </nav>
                    <div className='pdff'>
                        <Document className='sizee' file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                            {/* {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))} */}
                            <Page pageNumber={currentPage} />
                        </Document>
                    </div>
                    <Button onClick={onDownloadClick}>Download PDF</Button>
                </div>
            )}
        </>
    );
};

export default PDFUploader;
