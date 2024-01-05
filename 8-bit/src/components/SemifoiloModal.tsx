import styled from '@emotion/styled';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

function SemifoiloModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
}

export default SemifoiloModal;