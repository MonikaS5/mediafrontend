import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/media'

const useMediaStore = create((set) => ({
    mediaItems: [],

    fetchMediaItems: async () => {
        try {
            const response = await axios.get(API_URL);
            set({ mediaItems: response.data })
        } catch (error) {

        }
    }
}));

export default useMediaStore;