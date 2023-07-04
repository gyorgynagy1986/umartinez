import classes from './Modal.module.css'

const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop}>
    </div>
};

const ModalOverLay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

 //const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
        <Backdrop onClose={props.onClose} />
        <ModalOverLay>{props.children}</ModalOverLay>
    </>
  )
}

export default Modal