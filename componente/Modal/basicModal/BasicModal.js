import { Modal, Icon } from "semantic-ui-react";

export default function Basic(props) {
    const{show, setShow, title, children, ...rest} = props;
    const onClose= () => setShow(false);
    return(
   <Modal className="basic" open={show} onClose={onClose} {...rest}>
      <Modal.Header>
          <span>{title} <Icon name="close" onClick={onClose}/>
          </span>
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
   </Modal>
    );
}