import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

function Resume() {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    var scaleValue = (window.innerWidth >= 768) ? 1.8 : 0.55;
    var paddingValue = (window.innerWidth >= 768) ? '0px 0px 0px 0px' : '18vh 0px 0px 0px';

    // Use the worker from node_modules instead of CDN
    const workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

    return (
        <>
            <Worker workerUrl={workerSrc}>
                <div
                    style={{
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        padding: '4px',
                        position: 'fixed',
                        zIndex: '1',
                    }}
                >
                    <Download>
                        {(props) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={props.onClick}
                            >
                                Download
                            </button>
                        )}
                    </Download>
                </div>
                <div
                    style={{
                        padding: paddingValue,
                        height: '100vh',
                    }}
                >
                    <Viewer
                        fileUrl='/images/PatentLiResume.pdf'
                        defaultScale={scaleValue}
                        theme="dark"
                        plugins={[getFilePluginInstance]}
                    />
                </div>
            </Worker>
        </>
    )
}

export default Resume;