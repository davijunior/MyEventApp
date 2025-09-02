import React from 'react';
import '../../styles/modal.css';

export default function Modal({ children, onClose }: any) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}