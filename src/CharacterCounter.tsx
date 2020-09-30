import React, {FunctionComponent} from "react";
import {useRecoilState} from 'recoil';
import {textState} from "./App";
import CharacterCount from "./CharacterCount";

const TextInput: FunctionComponent = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    );
}

const CharacterCounter: FunctionComponent = () => {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    );
}

export default CharacterCounter;