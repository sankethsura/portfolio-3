import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    overflow: 'hidden',
  },
};

const ResizableModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  content: React.ReactNode;
}> = ({ isOpen, onRequestClose, content }) => {
  useEffect(() => {
    Modal.setAppElement('body'); // Use 'body' as the app element
  }, []);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles}>
      <ResizableBox width={400} height={300} minConstraints={[300, 200]} maxConstraints={[600, 400]}>
        <div className="p-4 bg-white h-full w-full overflow-auto">
          <button onClick={onRequestClose} className="float-right mb-2 bg-red-500 text-white px-2 py-1 rounded">
            Close
          </button>
          {content}
        </div>
      </ResizableBox>
    </Modal>
  );
};

export default ResizableModal;
