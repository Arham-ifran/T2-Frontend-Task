import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,bsc
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Tabs from './components/tabs/tabs';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Counter from './components/counters/counter';
import Cursor from './components/cursor/cursor';
import CharacterCounter from './components/characterCounter/input';
import PairFinder from './components/pairFounder/pairFounder';

const App = () => {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon ,bsc],
    [
      alchemyProvider({ apiKey: 'BuCykhKjiPtd0PSmgQX-5MOrCSzydEMx' }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'BuCykhKjiPtd0PSmgQX-5MOrCSzydEMx',
    chains
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })
  return (
    <div className="App">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
        <Tabs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path='/cursor' element={<Cursor />} />
            <Route path='/CharacterCounter' element={<CharacterCounter />} />
            <Route path='/PairFinder' element={<PairFinder /> } />
          </Routes>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
