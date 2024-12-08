import ModalProps from './Modal.types';
import {useOnKeyDown, useOnClickOutside} from '../../hooks';
import { useRef } from 'react';
import {createPortal} from 'react-dom';


//Important things that are missing here:
// The Modal is missing proper focus management and aria-modal="true" for that reason, which is critical for the user experience, 
// especially for users relying on assistive technologies. Without focus management, navigation becomes disruptive and inaccessible, 
// negatively impacting usability for all users 

export default function ModalOpen({title,children,onClose,"data-testid":testId}:Omit<ModalProps,"isOpen"> ) {
    const modalRef = useRef<HTMLDivElement>(null);
    // I created these custom hooks to ensure that this logic could be easily reused in other components in the future.
    useOnKeyDown("Escape", onClose);
    useOnClickOutside(modalRef, onClose);

    return (
        // Wrapped the modal in a portal to ensure it renders correctly without interference from its parent styles, 
        // as it will be appended at the end of the body.
        createPortal(<div className='modal-backdrop' data-testid={testId}>
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
        </div>, document.body)
    )
}
