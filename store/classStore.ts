import create from 'zustand';

interface StarsState {
    currentStar: string;
    changeStar: (name: string) => void;
    starList: string[];
    starInfo: starInfo;
}

interface starInfo {
    [key: string]: string
}
export const useStarsStore = create<StarsState>((set) => ({
    currentStar: 'Pulsi',
    changeStar: (name: string) => set(() => ({ currentStar: name })),
    starList: ['Pulsar', 'Red Dwarf'],
    starInfo: { 'Pulsar': 'Thats a pulsar', 'Red Dwarf': 'No Fuelscooping' }
}))