import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import SemifolioDatas from "../db/SemifolioDatas";
import { IsModalOpenAtom, SelectCategoryAtom, SelectStyleAtom, SemifolioDatasAtom } from '../recoil/SemifoiloAtum';
import { Common } from "../styles/common";
import Modal from './SemifoiloModal';

const SemifolioArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: ${Common.space.md} ${Common.space.md};
  margin: 0 auto;
`;
const HomeServicesWrapper = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  left: -${Common.space.md};
`;


function HomeSemifolio() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpenAtom);
  const categorySelect = useRecoilValue(SelectCategoryAtom);
  const styleSelect = useRecoilValue(SelectStyleAtom);
  const sortSemifolioDatas= useRecoilValue(SemifolioDatasAtom);

  


  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  function categorySelectSort() {
    if ((categorySelect.length === 0 || categorySelect.includes("관심분야 전체"))
      && (categorySelect.length === 0 || categorySelect.includes("관심분야 전체"))) {
      return sortSemifolioDatas; // categorySelect가 null이면 원래 데이터 그대로 반환
    } else {
      const categorySelectList: {
        id: number;
        title: string;
        category: string;
        imageUrl: string;
        userProfile: string;
        userName: string;
        likes: number;
        views: number;
        pick?: boolean;
        style?: string;
      }[] = [];
      for (let i = 0; i < sortSemifolioDatas.length; i++) {
        if (categorySelect == sortSemifolioDatas[i].category) {
          categorySelectList.push(sortSemifolioDatas[i]);
          console.log(categorySelectList);
        }
      }
      return categorySelectList;
    }
  }
  const categorySelectSortData = categorySelectSort();

  return (
    <div>
      <SemifolioArea>
        {SemifolioDatas.map((semifolioData, index) => (
          <SemifolioInfo
            key={index}
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
        ))}
      </SemifolioArea>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      </Modal>
    </div>
  );
}

export default HomeSemifolio;