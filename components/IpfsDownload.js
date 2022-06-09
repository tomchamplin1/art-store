import React  from 'react';
import useIPFS from '../hooks/useIPFS';

const IPFSDownload = ({ hash, filename }) => {

  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div className="download-component">
          <a className="px-3 py-2 rounded-3xl bg-blue-800 text-white hover:bg-blue-600" href={file} download={filename}>Download ↓</a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;