import React, { useState } from 'react';
import styled from "@emotion/styled";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Filter = styled.div`
  display: flex;
  margin-bottom: 8px;
  button {
    margin-right: 32px;
  }
`;

const DropdownButton = styled.button`
  background-color: white;
  border-radius: 12px;
  border: 1.3px solid #A6A6A6;
  width: 280px;
  height: 55px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 12px;
  font-size: 18px;
  color: #666666;
  position: relative;
  transition: background-color 0.3s;
  :hover {
    background-color: #F3F3F3;
    border: 1.3px solid #CCCCCC;
  }
  :active {
    background-color: #E6E6E6;
    border: 1.3px solid #CCCCCC;
  }
`

const DropdownList = styled.div`
  position: absolute;
  top: 130%;
  left: 0%;
  height: 290px;
  background-color: white;
  width: 100%;
  background: white;
  box-shadow: 0px 6px 6px 0px #0000005d;
  z-index: 1;
  border-radius: 12px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #B3B3B3;
    border-radius: 5px;
  }
`

const DropdownItem = styled.div`
  width: 100%;
  color: black;
  font-size: 18px;
  text-align: start;
  padding: 18px;
`

const PaletteList = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 130%;
  left: 0%;
  height: 370px;
  background-color: white;
  width: 260%;
  background: white;
  box-shadow: 0px 6px 6px 0px #0000005d;
  z-index: 1;
  border-radius: 8px;
`
const StyleMenu = styled.div`
  width: 100%;
  padding: 20px;

`

const StyleMenuTitle = styled.div`
  color: black;
  font-size: 19px;
  font-weight: 600;
  text-align: start;
  margin-bottom: 12px;
`

const CheckBoxMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
`

const CheckBox = styled.p`
  width: 50%;
  text-align: start;
  margin: 14px 0;
  color: black;
  display: flex;
`
const Check = styled.input`
  appearance: none;
  border: 2.5px solid #E8E8E8;
  border-radius: 3.5px;
  width: 1.5rem;
  height: 1.5rem;
`

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  margin-left: 8px;
`;

const StyleMenuLine = styled.div`
    display: block;
    width:1.5px;
    background-color:#D9D9D9;
    position:absolute;
    top:5%;
    bottom:18%;
    left:50%;
`

const ColorButton = styled.button`
  height: 5px;
`
const SelectColor = styled.div`
  height: 55px;
  width: 280px;
  color: #888888;
  text-align: left;
  border-radius: 12px;
  border: 1.5px solid #888888;
  align-items: center;
`;


function PortfolioFilter() {
  const [selectColor, setSelectColor]= useState('');
  const colorList = ["1212", "1111"];
  const colorButtonHandler = (color: string) =>{
    setSelectColor(color)
  }

  const [isExpandedCategory, setIsExpandedCategory] = useState(false);
  const [selectCategory, setSelectCategory] = useState('관심분야 선택');
  const categoryList = ['관심분야 전체', 'UI / UX', 'WEB', '그래픽', '제품', '광고', '시각', '일러스트레이션', '캐릭터', '공간', '패션', '3D', '영상/모션그래픽', '편집', '브랜딩'];
  const categoryButtonExpandHandler = () => {
    setIsExpandedCategory(!isExpandedCategory);
  };
  const categoryHandler = (category: string) => {
    setSelectCategory(category);
  };

  const [isExpandedStyle, setIsExpandedStyle] = useState(false);
  const [selectStyle, setSelectStyle] = useState('스타일 · 컬러 선택');
  const StyleList = ['심플한', '따뜻한', '다채로운', '차가운', '유쾌한', '감성적인', '고급스러운', '역동적인'];
  const styleButtonExpandHandler = () => {
    setIsExpandedStyle(!isExpandedStyle);
  };
  const styleHandler = (style: string) => {
    setSelectStyle(style);
  };


  return (
    <Filter>
      <DropdownButton onClick={categoryButtonExpandHandler}>
        <div>{selectCategory}</div>
        {!isExpandedCategory ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        {isExpandedCategory && (
          <DropdownList onClick={categoryButtonExpandHandler}>
            {categoryList.map((category) => (
              <DropdownItem key={category} onClick={() => categoryHandler(category)}>
                {category}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownButton>
      <DropdownButton onClick={styleButtonExpandHandler}>
        <div>{selectStyle}</div>
        {!isExpandedStyle ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        {isExpandedStyle && (
          <PaletteList onClick={styleButtonExpandHandler}>
            <StyleMenu>
              <StyleMenuTitle>스타일</StyleMenuTitle>
              <CheckBoxMenu>
                {StyleList.map((style) => (
                  <CheckBox key={style}>
                    <Check
                      type='checkbox'
                      id={style}
                      onClick={() => styleHandler(style)}
                    />
                    <CheckLabel htmlFor={style}>{style}</CheckLabel>
                  </CheckBox>
                ))}
              </CheckBoxMenu>
            </StyleMenu>
            <StyleMenuLine/>
            <StyleMenu>
              <StyleMenuTitle>메인 컬러</StyleMenuTitle>
              <SelectColor>
                #{selectColor}
              </SelectColor>
              {colorList.map((color)=>(
                <ColorButton key={color} onClick={() => colorButtonHandler(color)}/>
              ))}
            </StyleMenu>
          </PaletteList>
        )}
      </DropdownButton>
    </Filter>
  )
}

export default PortfolioFilter;