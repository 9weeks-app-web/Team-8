import styled from "@emotion/styled";
import { Common } from "../styles/common";

const ColorModalContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 370px;
  right: -170px;
  background-color : #FFFFFF;
  border : 1px solid ${Common.colors.neutral[20]};
  justify-content: center;
  border-radius: 12px;
  max-width: 282px;
  z-index: 9999;
`;

const ColorButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 30px;
  height: 30px;
  margin: 8px 0px 8px 8px;
  border: 1px solid ${Common.colors.neutral[20]};
  border-radius: 4px;
`;


function ColorModal({
  onClose,
  onSelectColor,
  show,
}: {
  onClose: () => void;
  onSelectColor: (color: string) => void;
  show: boolean;
}) {
  const colors: string[] = [
    "#777777", "#000000", "#FFFFFF", "#FF0100", "#FF8000", "#FFF500", "#33D302",
    "#018001", "#007878", "#70C9FF", "#1500FF", "#A338C2", "#FFB9F4", "#FF77BA",
    "#812053", "#A48353", "#88553D", "#3E465A"
  ];

  return (
      <ColorModalContainer show={show}>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            onClick={() => {
              onSelectColor(color);
              onClose();
            }}
          ></ColorButton>
        ))}
      </ColorModalContainer>
  );
}

export default ColorModal;

