import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { Common } from "../styles/common";
import HeaderModal from "./HeaderModal";

const Spacer = styled.div`
  flex-grow: 1;
`;

const ListTile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${Common.space["s"]};
  background-color: ${Common.colors.primary["10"]};
  width: 352px;
  height: 63px;
  border-radius: 12px;
`;

const UploadTitle = styled.h1`
  font-size: ${Common.font.size["md"]};
  font-weight: ${Common.font.weight.regular};
  margin-bottom: ${Common.space.xs};
  color: ${Common.colors.primary["80"]};
`;

const SubTitle = styled.h1`
  font-weight: ${Common.font.weight.regular};
  font-size: ${Common.font.size["xs"]};
  color: ${Common.colors.primary[80]};
`;

const BetweenItems = styled.div`
  height: 12px;
`;

const Div = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Span = styled.span`
  margin-left: 11px;
`;

const UploadModal: React.FC = () => {
  const navigate = useNavigate();

  const goUpload = () => {
    navigate('/upload');
  }

  return (
    <HeaderModal width="380px" height="180px" triangleLeft="82.5%" marginRight="260px">
      <Div>
        <ListTile onClick={goUpload}>
          <img alt="semifolio" src="/header/semifolio.svg" />
          <Span>
            <Spacer>
              <UploadTitle>세미폴리오</UploadTitle>
              <SubTitle>작업물, 프로젝트 등의 게시물</SubTitle>
            </Spacer>
          </Span>
        </ListTile>

        <BetweenItems />
        <ListTile>
          <img alt="portfolio" src="/header/portfolio.svg" />
          <Span>
            <Spacer>
              <UploadTitle>포트폴리오</UploadTitle>
              <SubTitle>나의 실력을 보여줄 수 있는 작품 또는 작품집</SubTitle>
            </Spacer>
          </Span>
        </ListTile>
      </Div>
    </HeaderModal>
  );
}

export default UploadModal;