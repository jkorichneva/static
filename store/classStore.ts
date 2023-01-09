import create from 'zustand';
import info from '../src/info';

interface StarsState {
    currentStar: string;
    changeStar: (name: string) => void;
    starList: string[];
    starInfo: starInfo;
}

interface starInfo {
    [key: string]: {  description: string, image: string }
}
export const useStarsStore = create<StarsState>((set) => ({
    currentStar: 'Pulsar',
    changeStar: (name: string) => set(() => ({ currentStar: name })),
    starList: ['Pulsar', 'Red Dwarf', 'Neutron Star', 'White Dwarf'],
    starInfo: info
}))