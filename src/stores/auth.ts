import create from 'zustand';

export type AuthStore = {
  isAuthenticated: boolean;
  isPinCodeSet: boolean;
  authenticate: (code: string) => boolean;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  isPinCodeSet: !!localStorage.getItem('pin-code'),
  authenticate(code) {
    // no PIN code set, save a new one
    if (!localStorage.getItem('pin-code')) {
      localStorage.setItem('pin-code', code);
      set({ isAuthenticated: true, isPinCodeSet: true });
      return true;
    }

    // compare existing PIN code
    if (code === localStorage.getItem('pin-code')) {
      set({ isAuthenticated: true });
      return true;
    }

    // nope
    return false;
  },
}));
