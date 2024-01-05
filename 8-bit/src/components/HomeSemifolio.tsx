import React, { useState } from "react";
import styled from "@emotion/styled";
import SemifolioInfo from "./SemifoiloInfo";
import Modal from './SemifoiloModal';
import SemifolioDatas from "../db/SemifolioDatas";
import HomeServices from "./HomeServices";

const SemifolioArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
`;
const HomeServicesWrapper = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  left: -21px;
`;
interface ModalData {
  title: string;
  category: string;
  imageUrl: string;
  userProfile: string;
  userName: string;
  likes: number;
  views: number;
  pick?: boolean;
}

function HomeSemifolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (modalDatas: ModalData) => {
    setModalData(modalDatas);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SemifolioArea>
        {SemifolioDatas.map((semifolioData, index) => (
          <React.Fragment key={index}>
            <SemifolioInfo
              title={semifolioData.title}
              category={semifolioData.category}
              imageUrl={semifolioData.imageUrl}
              userProfile={semifolioData.userProfile}
              userName={semifolioData.userName}
              likes={semifolioData.likes}
              views={semifolioData.views}
              openModal={openModal}
              pick={semifolioData.pick}
            />
            {index === 19 && (
              <HomeServicesWrapper>
                <HomeServices />
              </HomeServicesWrapper>
            )}
          </React.Fragment>
        ))}
      </SemifolioArea>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        {modalData && (
          <>
            <div>
              {/* <img src={modalData.userProfile}></img> */}
              <p>{modalData.userName}</p>
            </div>
            <p>좋아요: {modalData.likes}</p>
            <p>조회수: {modalData.views}</p>
          </>
        )}
      </Modal>
    </div>
  );
}

export default HomeSemifolio;