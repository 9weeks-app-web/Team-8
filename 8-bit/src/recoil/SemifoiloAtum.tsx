import { atom } from "recoil";
import SemifolioDatas from '../db/SemifolioDatas';

export const SelectCategoryAtom = atom({
  key: 'SelectCategoryAtom',
  default: "",
})

export const SelectStyleAtom = atom<string[]>({
  key: 'SelectStyleAtom',
  default: [],
})

interface SemifolioData {
  title: string;
  category: string;
  imageUrl: string;
  userProfile: string;
  userName: string;
  likes: number;
  views: number;
  style: string;
}

export const ModalDataAtom = atom<SemifolioData | null>({
  key: 'ModalDataAtom',
  default: null,
})

export const IsModalOpenAtom = atom({
  key: 'IsModalOpenAtom',
  default: false,
})

export const SelectSortAtom = atom({
  key: 'SelectSortAtom',
  default: '기본순',
})

export const SemifolioDatasAtom = atom({
  key: 'SemifolioDatasAtom',
  default: SemifolioDatas,
})