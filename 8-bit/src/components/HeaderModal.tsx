import styled from "@emotion/styled";
import { Common } from "../styles/common";

const Modal = styled.div<HeaderModalProps>`
    padding: ${Common.space.s};
    width: ${(props) => props.width}; 
    height: ${(props) => props.height}; 
    background-color: white;
    border: 1.5px solid ${Common.colors.neutral["10"]};
    position: absolute;
    border-radius:12px;
    z-index:10;
    margin-right: ${(props) => props.marginRight}; 
    margin-top: 12px;
    .triangle {
        width: 15px;
        background: linear-gradient(to bottom right, white 50%, transparent 50%);
        border-left: 1.5px solid ${Common.colors.neutral["10"]};
        border-top: 1.5px solid ${Common.colors.neutral["10"]};
        height: 15px;
        transform: rotate(45deg);
        position: absolute;
        left: ${(props) => props.triangleLeft};
        top: -8px;
    }`;

interface HeaderModalProps {
    children: React.ReactNode;
    width: string;
    height: string;
    triangleLeft: string;
    marginRight: string;
}

function HeaderModal({ children, width, height, triangleLeft, marginRight }: HeaderModalProps) {
    return (
        <Modal width={width} height={height} triangleLeft={triangleLeft} marginRight={marginRight}>
            <div>
                <div className='triangle'></div>
                {children}
            </div>
        </Modal>
    );
}

export default HeaderModal;