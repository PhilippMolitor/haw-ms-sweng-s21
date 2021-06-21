import create from 'zustand';

// boolean state only
export type BlurStore = {
  isBlurred: boolean;
  setBlurred: (blurred: boolean) => void;
};

export const useBlur = create<BlurStore>((set) => ({
  isBlurred: false,
  setBlurred(blurred) {
    set({ isBlurred: blurred });
  },
}));
