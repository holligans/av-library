import ModalProps from './Modal.types';

export default function Modal(props:ModalProps) {
  return (
    <div className='modal-backdrop'>
        <div className='modal-dialog'>
            <div className='modal-header'>
                <h2>{props.title}</h2>
            </div>
            <div className='modal-body'>{props.children}</div>
            <div className='modal-footer'>
                <button type="button">Close</button>
            </div>
        </div>
    </div>
  )
}
