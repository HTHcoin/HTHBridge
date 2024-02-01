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
            rpc: 'http://206.189.231.104:7118',
            // Enter deployed (bridge.sol) contract address
            contract: '0x3C7A88beDa98fa8361fc3fFc90292FD884d0E0a1',
            // Block explorer of chain
            explorer: 'http://154.12.237.243:5000/tx/',
            // Gas price in WEI | 1 GWEI = 1000000000 WEI
            gasPrice: 2000000000,
            // Logo file name
            logo: 'hth.png'
        },
        {
            id: 2330,
            name: 'Altcoinchain',
            rpc: 'https://rpc0.altcoinchain.org/rpc',
            contract: '0xeB0aeDbe8762554fb041B59794f48BF1f606ce45',
            explorer: 'http://node-sub.network:4100/tx/',
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
            symbol: 'wHTH/aHTH',
            // Decimals of the token
            decimals: 18,
            // Minimum amount for swap
            min: 0.001,
            // Maximum amount for swap
            max: 1000000,
            address: {
                // chain id: token address in the chain
                7118: '0x592Be95eDa7CE2EA8a0142d4dA9F8Afc0ced2691',
                2330: '0x0bc467A0A17f1c97b1CDF1ddb174c743212a7d7F'
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
