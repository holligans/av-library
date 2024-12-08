import ModalProps from './Modal.types';
import {useOnKeyDown, useOnClickOutside} from '../../hooks';
import { useRef } from 'react';

export default function ModalOpen({title,children,onClose,"data-testid":testId}:Omit<ModalProps,"isOpen"> ) {
    const modalRef = useRef<HTMLDivElement>(null);
    
    useOnKeyDown("Escape", onClose);
    useOnClickOutside(modalRef, onClose);

    return (
        <div className='modal-backdrop' data-testid={testId}>
            <div className='modal-dialog' role='dialog' ref={modalRef}>
                <div className='modal-header'>
                    {/* h2 tags get heading role automatically */}
                    <h2>{title}</h2> 
                </div>
                <div className='modal-body'>{children}</div>
                <div className='modal-footer'>
                    <button type="button" aria-label="Close modal" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
