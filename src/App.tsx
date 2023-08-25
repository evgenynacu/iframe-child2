import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { IFrameEthereumProvider } from '@ledgerhq/iframe-provider';

const Wrapper = styled.div`
    font-size: 2rem;
    text-align: center;
`;

const App: FunctionComponent = () => {
    const [state, setState] = useState<string>('');
    return (
        <div>
            <Wrapper>Welcome to React TS template!!!!</Wrapper>
            <div>address is {state}</div>
            <button onClick={() => getAccountAndShow(setState)}>
                Get accounts
            </button>
        </div>
    );
};

function getAccountAndShow(
    setState: React.Dispatch<React.SetStateAction<string>>
) {
    const provider = new IFrameEthereumProvider();

    provider.send('eth_requestAccounts').then((result) => {
        setState(result[0]);
    });
}

export default App;
