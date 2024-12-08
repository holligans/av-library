import ModalProps from './Modal.types';
import "./Modal.styles.css"
import ModalOpen from './ModalOpen';


export default function Modal({isOpen, children, ...restProps}:ModalProps) {
    if(!isOpen){
        return null;
    }
    return (
        <ModalOpen {...restProps}>
            {children}
        </ModalOpen>
  )
}
