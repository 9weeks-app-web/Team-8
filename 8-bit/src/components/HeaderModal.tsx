import styled from "@emotion/styled";
import { Common } from "../styles/common";

const Modal = styled.div<HeaderModalProps>`
    left: ${(props) => props.left}; 
    padding: ${Common.space.md};
    width: 350px;
    height: 340px;
    background-color: white;
    border: 2px solid ${Common.colors.neutral["20"]};
    display: flex;
    flex-direction: column;
    position: absolute;
    top:100px;
    border-radius: 6px;
    z-index:10;
    .triangle {
        width: 20px;
        background: linear-gradient(to bottom right, white 50%, transparent 50%);
        border-left: 2px solid ${Common.colors.neutral["20"]};
        border-top: 2px solid ${Common.colors.neutral["20"]};
        height: 20px;
        transform: rotate(45deg);
        position: absolute;
        left: 50%;
        top: -11px;
    }`;

interface HeaderModalProps {
    children: React.ReactNode;
    left?: string;
    
}

function HeaderModal({ children, left}: HeaderModalProps) {
    return (
        <Modal left={left}>
            <div>
                <div className='triangle'></div>
                {children}
            </div>
        </Modal>
    );
}

export default HeaderModal;