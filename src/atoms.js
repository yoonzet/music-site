import { atom, DefaultValue } from "recoil";

const localStorageEffect =
    (key) =>
    ({setSelf, onSet}) => {
        const savedValue = localStorage.getItem(key);
        if(savedValue !== null){
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue) => {
            if(newValue instanceof DefaultValue) {
                localStorage.removeItem(key);
            }else {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
        });
    };

export const likeState = atom({
    key:'likeState',
    default:[],
    effects: [localStorageEffect('likeState')],
});