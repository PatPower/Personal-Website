import React from 'react'
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

function Resume() {
    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;
    var scaleValue = (window.innerWidth >= 768) ?  1.8 : 0.55;
    var paddingValue = (window.innerWidth >= 768) ?  '0px 0px 0px 0px' :'18vh 0px 0px 0px';
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
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
                            {(props: RenderDownloadProps) => (
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
                        fileUrl='/images/Patent-Li-Resume.pdf'
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