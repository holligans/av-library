export default interface ModalProps {
    isOpen:boolean, 
    title:React.ReactNode, 
    onClose:() => void, 
    children:React.ReactNode,
    "data-testid"?:string,
}