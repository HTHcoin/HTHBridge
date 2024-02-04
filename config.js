module.exports = {
    app: {
     title: 'HTH-ALT Bridge',
        port: 5000
    },
    chains: [
        {
            // EVM chain id: chainlist.org
            id: 7118,
            // Name of the chain
            name: 'HelpTheHomeless',
            // RPC URL of the chain
            rpc: 'http://154.12.237.243:7118',
            // Enter deployed (bridge.sol) contract address
            contract: '0x0a7B9D1b4B34815231b29071697c07B3D1D56cDf',
            // Block explorer of chain
            explorer: 'http://154.12.237.243:3000/tx/',
            // Gas price in WEI | 1 GWEI = 1000000000 WEI
            gasPrice: 2000000000,
            // Logo file name
            logo: 'hth.png'
        },
        {
            id: 2330,
            name: 'Altcoinchain',
            rpc: 'https://rpc0.altcoinchain.org/rpc',
            contract: '0x592Be95eDa7CE2EA8a0142d4dA9F8Afc0ced2691',
            explorer: 'https://expedition.altcoinchain.org/tx/',
            gasPrice: 2000000000,
            logo: 'alt.png'
        }
    ],
    tokens: [
        {
            // Unique ID for the token
            id: 'multi-token',
            // Name of the token
            name: 'HelpTheHomeless',
            // Symbol of the token
            symbol: 'wHTH',
            // Decimals of the token
            decimals: 18,
            // Minimum amount for swap
            min: 0.001,
            // Maximum amount for swap
            max: 1000000,
            address: {
                // chain id: token address in the chain
                7118: '0x12b52c7A24161AEeEa6Ae63Cc5fcebaa75691A03',
                2330: '0x3a5e79Af8CfE931C3551FD71C09B20b44D27209B'
            }
        }
    ],
    // allow pairs for bridging. example: '1287-80001' to allow bridging from moonbase to polygon.
    pairs: ['2330-7118','7118-2330'],
    // fee multiplier. enter 0 for feeless transactions. (0.03 = 3% fee)
    feeMultiplier: 0,
    // private key of (bridge.sol) deployer address
    privateKey: ''
}
