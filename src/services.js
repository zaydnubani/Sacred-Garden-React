import { init } from "@web3-onboard/react"
import injectedModule from '@web3-onboard/injected-wallets'
// import ledgerModule from '@web3-onboard/ledger'
import torusModule from '@web3-onboard/torus'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import gnosisModule from '@web3-onboard/gnosis'
import gardn_logo from './images/gardn_logo.svg'

const initWeb3Onboard = init({
    wallets: [
      injectedModule(),
      // ledgerModule(),
      coinbaseModule(),
      walletConnectModule(),
      gnosisModule(),
      torusModule()
    ],
    chains: [
      {
        // TESTING : 0x4
        // PRODUCTION : 0x1
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum',
        // WORKING : https://eth-mainnet.alchemyapi.io/v2/b1mLSbOw7QcQpCDW88sZEbBf7OHBChYq
        // TESTNNET : https://eth-rinkeby.alchemyapi.io/v2/AVSzv_X7HJtkQChIk3ncc8RolOzYnCTr
        // MAINNET : https://eth-mainnet.alchemyapi.io/v2/363c613b6c524ebe86ce01dc2f6511d9
        rpcUrl: `https://eth-mainnet.alchemyapi.io/v2/b1mLSbOw7QcQpCDW88sZEbBf7OHBChYq`
      },
      {
        // TESTING : 0x4
        // PRODUCTION : 0x1
        id: '0x4',
        token: 'RIN',
        label: 'Rinkeby',
        // WORKING : https://eth-mainnet.alchemyapi.io/v2/b1mLSbOw7QcQpCDW88sZEbBf7OHBChYq
        // TESTNNET : https://eth-rinkeby.alchemyapi.io/v2/AVSzv_X7HJtkQChIk3ncc8RolOzYnCTr
        // MAINNET : https://eth-mainnet.alchemyapi.io/v2/363c613b6c524ebe86ce01dc2f6511d9
        rpcUrl: `https://eth-rinkeby.alchemyapi.io/v2/AVSzv_X7HJtkQChIk3ncc8RolOzYnCTr`
      },
    ],
    appMetadata: {
      name: 'SACRD GARDN',
      icon: `${gardn_logo}`,
      logo: `${gardn_logo}`,
      description: 'Welcome to the floraverse.',
      recommendedInjectedWallets: [
        { name: 'Coinbase', url: 'https://www.coinbase.com/wallet' },
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Binance', url: 'https://www.binance.com' },
        { name: 'Exodus', url: 'https://www.exodus.com/'}
      ],
    }
})

export default initWeb3Onboard
  