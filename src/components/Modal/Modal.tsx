import ModalProps from './Modal.types';
import "./Modal.styles.css"


export default function Modal({isOpen, title, children, onClose}:ModalProps) {
    if(!isOpen){
        return null;
    }
    return (
        <div className='modal-backdrop'>
            <div className='modal-dialog'>
                <div className='modal-header'>
                    <h2>{title}</h2>
                </div>
                <div className='modal-body'>{children}</div>
                <div className='modal-footer'>
                    <button type="button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
  )
}
