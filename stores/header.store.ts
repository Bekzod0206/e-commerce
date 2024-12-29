import { defineStore } from 'pinia';

interface HeaderState {
  status: string;
}

const initialState: HeaderState = { status: '' };

export const useHeaderStore = defineStore('header', {
  state: (): HeaderState => ({ ...initialState }),

  getters: {
    currentHeader: (state): string => state.status,
  },

  actions: {
    set(data: Partial<HeaderState>) {
      this.$patch(data);
    },
    clear() {
      this.$patch({ ...initialState });
    },
  },
});
