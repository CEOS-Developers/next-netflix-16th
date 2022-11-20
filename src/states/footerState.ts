import { atom } from 'recoil';

export const selectedContentState = atom<string>({
  key: 'footerState/selectedContent',
  default: 'home',
});
