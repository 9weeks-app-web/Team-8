import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Common } from '../styles/common';
import { useRecoilState } from 'recoil';
import { SelectCategoryAtom, SelectStyleAtom, SelectSortAtom, SemifolioDatasAtom, SelectColorAtom } from '../recoil/SemifoiloAtum';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SemifolioDatas from '../db/SemifolioDatas';


interface ColorProps {
  isSelectedColor: boolean; 
}
interface StyleProps {

}
const Filter = styled.div`
  
`;
const FilterButtons = styled.div`
  display: flex;
  margin-bottom: ${Common.space.md};
  justify-content: space-between;
`;
const LeftDropdownButton = styled.div`
  display: flex;
  gap: ${Common.space.lg};
`;
const RightDropdownButton = styled.div`
  display: flex;
  align-items: center;
`;
const DropdownButton = styled.button`
  background-color: white;
  border-radius: 12px; 
  width: 238px;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.regular};
  position: relative;
  transition: background-color 0.3s;
  border: 1.3px solid ${Common.colors.neutral[20]}; 
  padding: 12px;
  :active {
    border: 1.3px solid ${Common.colors.neutral[100]}; 
  }
`;
const DropdownTitleZone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 238px;
  height: 48px;
`
const DropdownTitle = styled.div`
  padding-left: 2px;
  color: ${Common.colors.neutral[100]};
`;
const CustomDropDownIcon = styled(ArrowDropDownIcon)`
  color: ${Common.colors.neutral[40]};
`
const CustomDropUpIcon = styled(ArrowDropUpIcon)`
  color: ${Common.colors.neutral[40]};
`
const DropdownMenu = styled.div`
  padding: 8px 2px;
  position: absolute;
  top: 58px;
  left: -1px;
  width: 238px;
  height: 256px;
  background-color: #FFFFFF;
  box-shadow: 0px 6px 6px 0px #0000005d; //안 나와있음
  border-radius: 12px;
  z-index: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 9px;
    height: 77px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Common.colors.neutral[30]};
    border-radius: 10px;
  }
`;
const DropdownItem = styled.div`
  width: 100%;
  height: 48px;
  color: ${Common.colors.neutral[90]};
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.regular};
  padding: 12px 14px;
  text-align: start;
`;
const DropdownArea = styled.div`
  position: absolute;
  justify-content: space-around;
  top: 58px;
  left: 0%;
  height: 307px;
  width: 636px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); //보는 방법 모르겠음
  border-radius: 5px;
  z-index: 1;
`;
const PaletteList = styled.div`
  display: flex;
`
const StyleMenu = styled.div`
  width: 308px;
`;
const StyleMenuTitle = styled.div`
  color: ${Common.colors.neutral[90]};
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.semibold};
  text-align: start;
  margin: 18px 0 0 ${Common.space.s};
`;
const CheckBoxMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 14px 48.55px 0 4.55px;
`;
const CheckBox = styled.div`
  /* width: 50%; */
  display: flex;
  padding: 12px 14px;
  width: 127.45px;
  height: 52px;
  gap: ${Common.space.xs};
`;
const Check = styled.input<StyleProps>`
  appearance: none;
  border: 2.5px solid #E8E8E8;
  border-radius: 3.5px;
  width: 23px;
  height: 23px;

  &:checked {
    border-color: transparent;
    background: ${Common.colors.primary[80]};

    &:checked:after {
      content: '✔';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: white;
    }
  }
`;
const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  /* user-select: none; */
  color: ${Common.colors.neutral[90]};
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.regular};
`;
const StyleMenuLine = styled.div`
  position: absolute;
  width: 1px;
  height: 251px;
  left: 308px;
  background-color:#000000;
  opacity: 10%;
`;
const PaletteMenu = styled.div`
  width: 328px;
  padding-left: 5px;
`;
const Palette = styled.div`
  margin: 10px 70px ${Common.space.s} ${Common.space.s};
`;
const SelectColor = styled.div`
  width: 237px;
  height: 44px;
  padding: 10px;
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.semibold};
  color: #888888;
  border: 1px solid #888;
  border-radius: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;
const SelectPalette = styled.div`
  display: flex;
  width: 226px;
  align-items: flex-start;
  align-content: flex-start;
  gap: ${Common.space.xs};
  flex-wrap: wrap;
`;
const ColorButton = styled.button<ColorProps>`
  width: 31px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: #${(props) => props.color || 'transparent'};
  position: relative;
  p{
    color: ${Common.colors.neutral[0]}
  }
  div{
    color: white;
    display: ${(props) => (props.isSelectedColor ? 'flex' : 'none')};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const ButtonArea = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${Common.space.s};
  position: absolute;
  right: ${Common.space.lg};;
  bottom: 20px;
  button {
    width: 86px;
    height: 44px;
    border-radius: 12px;
    border: none;
    padding: 10px 15px;
    font-size: ${Common.font.size.md};;
    font-weight: ${Common.font.weight.medium};
  }
`;
const WhiteButton = styled.button`
  color: ${Common.colors.neutral[30]};
  background-color: #FFF;
`;
const BlueButton = styled.button`
  color: #FFF;
  background-color: ${Common.colors.primary[80]};
`;
const SortButton = styled.button`
  background-color: white;
  border: none;
  width: auto;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: ${Common.space.xs};
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.semibold};
  color: ${Common.colors.neutral[100]};
  position: relative;
  padding: 0;
`;
const CustomSortDropDownIcon = styled(ArrowDropDownIcon)`
  height: 24px;
  width: 24px;
  color: ${Common.colors.neutral[60]};
`;
const CustomSortDropUpIcon = styled(ArrowDropUpIcon)`
  height: 24px;
  width: 24px;
  color: ${Common.colors.neutral[60]};
`;
const SortMenu = styled.div`
  position: absolute;
  top: 34px;
  right: 0px;
  width: 85px;
  height: auto;
  background-color: #FFFFFF;
  box-shadow: 0px 6px 6px 0px #0000005d; //안 나와있음
  border-radius: 12px;
  z-index: 1;
`;

const FilterZone = styled.div`
  width: 100%;
  height: auto;
  min-height: 64px;
  background-color: ${Common.colors.primary[5]};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
  padding: 12px;
  div{
    display: flex;
    gap: ${Common.space.xs};
  }
`;
const FilterTagContainer = styled.div`
  flex-wrap: wrap;
  flex-grow: 1;
`
const SelectButton = styled.div`
  height: 40px;
  display: flex;
  padding: ${Common.space.xs} 12px;
  justify-content: center;
  align-items: center;
  gap: ${Common.space.xs};
  border-radius: 12px;
  border: 1px solid ${Common.colors.neutral[10]};
  background-color: ${Common.colors.neutral[0]};
  div{
    font-size: ${Common.font.size.sm};
    font-weight: ${Common.font.weight.medium};
    color: ${Common.colors.neutral[100]};
  }
  span{
    width: 17.69px;
    height: 17.12px;
    border-radius: 2.28px;
    background:  ${(props) => `#${props.color || 'transparent'}`};
  }
`
const DeleteButton = styled(ClearIcon)`
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
  color: ${Common.colors.neutral[40]};
`;
const ResetButtonContainer = styled.div`
  min-width: 80px;
  height: 21px;
  display: flex;
  flex-grow: 0;
`
const ResetButton = styled.button`
  padding-right: 5.61px;
  gap: 6px;
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral[100]};
  align-items: center;
  display: flex;
  background: transparent;
  border: none;
`;



function HomePortfolioFilter() {
  const [isExpandedCategory, setIsExpandedCategory] = useState(false);
  const [selectCategory, setSelectCategory] = useRecoilState(SelectCategoryAtom);
  const categoryList = ['관심분야 전체', 'UI/UX', 'WEB', '그래픽', '제품', '광고', '시각', '일러스트레이션', '캐릭터', '공간', '패션', '3D', '영상/모션그래픽', '편집', '브랜딩'];
  const categoryButtonExpandHandler = () => {
    setIsExpandedCategory(!isExpandedCategory);
  };
  const categoryHandler = (category: string) => {
    setSelectCategory(category);
  };
  const categoryFilterDelete = (category: string) => {
    if (selectCategory == category) {
      setSelectCategory("");
    }
  }
  const filterReset = () => {
    setSelectCategory("");
    setSelectStyle([]);
    setTemporaryStyle([]);
    setSelectColor([]);
    setTemporaryColor([]);
    setIsSelected(Array(colorList.length).fill(false))
  }



  const [isExpandedStyle, setIsExpandedStyle] = useState(false);
  const [selectStyle, setSelectStyle] = useRecoilState<string[]>(SelectStyleAtom);
  const [temporaryStyle, setTemporaryStyle] = useState<string[]>([]);
  const StyleList = ['심플한', '따뜻한', '다채로운', '차가운', '유쾌한', '감성적인', '고급스러운', '역동적인'];
  const styleButtonExpandHandler = () => {
    setIsExpandedStyle(!isExpandedStyle);
    setNowColor('');
    setTemporaryColor(selectColor);
    setTemporaryStyle(selectStyle);
  };
  const applyButtonExpandHandler = () => {
    setIsExpandedStyle(!isExpandedStyle);
    setSelectStyle(temporaryStyle);
    setSelectColor(temporaryColor);
    setNowColor('');
  };
  const clearButtonExpandHandler = () => {
    setTemporaryStyle([]);
    setTemporaryColor([]);
    setNowColor('');
    setIsSelected(Array(colorList.length).fill(false))
  }
  const styleHandler = (style: string) => {
    setTemporaryStyle(prevStyle => {
      if (!prevStyle.includes(style)) {
        return [...prevStyle, style];
      }
      return prevStyle;
    });
  };
  const styleFilterDelete = (style: string) => {
    const updatedStyles = selectStyle.filter((selectedStyle) => selectedStyle !== style);
    const updatedTemporaryStyles = temporaryStyle.filter((selectedStyle) => selectedStyle !== style);
    setSelectStyle(updatedStyles);
    setTemporaryStyle(updatedTemporaryStyles)
  }
  const [selectColor, setSelectColor] = useRecoilState(SelectColorAtom);
  const [temporaryColor, setTemporaryColor] = useState<string[]>([]);
  const colorList = ["777777", "000000", "FFFFFF", "FF0100", "FF8000", "FFF500", "33D302", "018001", "007878", "70C9FF", "1500FF", "A338C2", "FFB9F4", "FF77BA", "812053", "A48353", "88553D", "3E465A"];
  const [nowColor, setNowColor] = useState('');
  const colorButtonHandler = (color: string) => {
    setNowColor(color);
    setTemporaryColor(prevColor => {
      if (!prevColor.includes(color)) {
        return [...prevColor, color];
      }
      return prevColor.filter((prevColorItem) => prevColorItem !== color);
    });
  };
  const colorFilterDelete = (color: string) => {
    const updatedColors = selectColor.filter((selectedColor) => selectedColor !== color);
    const updatedTemporaryColors = temporaryColor.filter((selectedColor) => selectedColor !== color);
    setSelectColor(updatedColors);
    setTemporaryColor(updatedTemporaryColors)
  };
  const [isSelected, setIsSelected] = useState(new Array(colorList.length).fill(false));
  const isSelectedHandler = (index) =>{
    setIsSelected((prevList) => {
      const newList = [...prevList];
      newList[index] = !newList[index];
      return newList;
    });
  };


  const [isExpandedSort, setIsExpandedSort] = useState(false);
  const [selectSort, setSelectSort] = useRecoilState(SelectSortAtom);
  const SortList = ['기본순', 'PICK', '추천순', '최신순', '팔로우순'];
  const SortButtonExpandHandler = () => {
    setIsExpandedSort(!isExpandedSort);
  };
  const SortHandler = (Sort: string) => {
    setSelectSort(Sort);
  };

  const [semifolioDatas, setSemifolioDatas] = useRecoilState(SemifolioDatasAtom);
  const sort = (Sort: string) => {
    console.log('Sorting...', Sort);
    let sortedData = [];
    if (Sort === '기본순') {
      sortedData = SemifolioDatas;
      setSemifolioDatas(sortedData);
    } else if (Sort === 'PICK') {
      sortedData = semifolioDatas.slice().sort((a, b) => {
        const aIsPicked = 'pick' in a && a.pick === true ? 1 : 0;
        const bIsPicked = 'pick' in b && b.pick === true ? 1 : 0;
        if (aIsPicked == bIsPicked) {
          return aIsPicked === 1 ? 0 : b.likes - a.likes;
        } else {
          return (bIsPicked - aIsPicked);
        }
      })
      setSemifolioDatas(sortedData);
    } else if (Sort === '추천순') {
      sortedData = semifolioDatas.slice().sort((a, b) => b.likes - a.likes);
      setSemifolioDatas(sortedData);
    } else if (Sort === '최신순') {
      sortedData = SemifolioDatas;
      setSemifolioDatas(sortedData);
    } else if (Sort === '팔로우순') {
      sortedData = SemifolioDatas;
      setSemifolioDatas(sortedData);
    }

  }
  useEffect(() => {
    sort(selectSort);
  }, [selectSort]);

  return (
    <Filter>
      <FilterButtons>
        <LeftDropdownButton>
          <DropdownButton onClick={categoryButtonExpandHandler}>
            <DropdownTitle>관심분야 선택</DropdownTitle>
            {!isExpandedCategory ? <CustomDropDownIcon /> : <CustomDropUpIcon />}
            {isExpandedCategory && (
              <DropdownMenu onClick={categoryButtonExpandHandler}>
                {categoryList.map((category) => (
                  <DropdownItem key={category} onClick={() => categoryHandler(category)}>
                    {category}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownButton>
          <DropdownButton >
            <DropdownTitleZone onClick={styleButtonExpandHandler}>
              <DropdownTitle >스타일 · 컬러 선택</DropdownTitle>
              {!isExpandedStyle ? <CustomDropDownIcon /> : <CustomDropUpIcon />}
            </DropdownTitleZone>
            {isExpandedStyle && (
              <DropdownArea>
                <PaletteList>
                  <StyleMenu>
                    <StyleMenuTitle>스타일</StyleMenuTitle>
                    <CheckBoxMenu>
                      {StyleList.map((style) => (
                        <CheckBox key={style}>
                          <Check
                            type='checkbox'
                            id={style}
                            onClick={() => styleHandler(style)}
                            checked={temporaryStyle.includes(style)}
                          />
                          <CheckLabel htmlFor={style}>{style}</CheckLabel>
                        </CheckBox>
                      ))}
                    </CheckBoxMenu>
                  </StyleMenu>
                  <StyleMenuLine />
                  <PaletteMenu>
                    <StyleMenuTitle>메인 컬러</StyleMenuTitle>
                    <Palette>
                      <SelectColor>#{nowColor}</SelectColor>
                      <SelectPalette>
                        {colorList.map((color, index) => (
                          <ColorButton
                            key={color}
                            color={color}
                            onClick={() => {colorButtonHandler(color); isSelectedHandler(index);}}
                            isSelectedColor={temporaryColor.includes(color) && isSelected[index]}
                          >
                            <div>✔</div>
                          </ColorButton>
                        ))}
                      </SelectPalette>
                    </Palette>
                  </PaletteMenu>
                </PaletteList>
                <ButtonArea>
                  <WhiteButton onClick={clearButtonExpandHandler}>선택해제</WhiteButton>
                  <BlueButton onClick={applyButtonExpandHandler}>적용하기</BlueButton>
                </ButtonArea>
              </DropdownArea>
            )}
          </DropdownButton>
        </LeftDropdownButton>
        <RightDropdownButton>
          <SortButton onClick={SortButtonExpandHandler}>
            <div>{selectSort}</div>
            {!isExpandedSort ? <CustomSortDropDownIcon /> : <CustomSortDropUpIcon />}
            {isExpandedSort && (
              <SortMenu onClick={SortButtonExpandHandler}>
                {SortList.map((Sort) => (
                  <DropdownItem key={Sort} onClick={() => SortHandler(Sort)}>
                    {Sort}
                  </DropdownItem>
                ))}
              </SortMenu>
            )}
          </SortButton>
        </RightDropdownButton>
      </FilterButtons>
      {selectCategory.length != 0 || selectStyle.length != 0 || selectColor.length != 0? (
        <FilterZone>
          <FilterTagContainer>
            {selectCategory != "" && <SelectButton>
              {selectCategory}
              <DeleteButton onClick={() => categoryFilterDelete(selectCategory)} />
            </SelectButton>}
            {selectStyle.map((style, index) => (
              <SelectButton key={index}>
                {style}
                <DeleteButton onClick={() => styleFilterDelete(style)} />
              </SelectButton>
            ))}
            {selectColor.map((color, index) => (
              <SelectButton key={index} color={color}>
                <span/>#{color}
                <DeleteButton onClick={() => colorFilterDelete(color)} />
              </SelectButton>
            ))}
          </FilterTagContainer>
          <ResetButtonContainer>
            <ResetButton onClick={filterReset}>
              <RefreshIcon />
              <div>초기화</div>
            </ResetButton>
          </ResetButtonContainer>
        </FilterZone>
      ) : null}
    </Filter>
  )
}

export default HomePortfolioFilter;