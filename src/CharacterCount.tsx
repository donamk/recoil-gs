import React, {FunctionComponent} from "react";
import {selector, useRecoilValue} from "recoil";
import {textState} from "./App";

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    },
});

const CharacterCount: FunctionComponent = () => {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}

export default CharacterCount;