import { create } from 'zustand';

const useMediaStore = create((set) => ({
    mediaItems: [],
}));