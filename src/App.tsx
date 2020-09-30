import React, {FunctionComponent} from 'react';
import {atom, RecoilRoot, RecoilState} from "recoil";
import CharacterCounter from "./CharacterCounter";

export const textState:RecoilState<string> = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

const App: FunctionComponent = () => {
  return (
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
  )
}

export default App;
