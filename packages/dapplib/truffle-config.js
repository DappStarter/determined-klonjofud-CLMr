require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad hidden gloom swear start'; 
let testAccounts = [
"0x8e7442bf3e2639a384c9f931328895161ba8f4e77a0f666325c893858df4a073",
"0xd8347fb34771631439d909a327aae947af91de522c9a440e3f7255544de31b91",
"0x065b6235f51f47283e33076b8003f924e595bcc9eaae757e520d5a5e4a31053d",
"0x3ec0564df900ed2184908451cbb87f4bbc06e3596b6c98b9cdd80cb92a0d5aa6",
"0xe748581d8d6cf3ee5033dcf4b6a2c63ad8d699e5e58f1c83c8355c1637998821",
"0x1ff7d919245e5e5d1066b7700a7c6adaeb77187adb7ae89ecb5072607923702d",
"0x4efedc301a2e5f02b991808d805150889224be83d2f9bf794e9004f8ede75eab",
"0xf800beb025849392231cc0ff3f469a41e4aab9285f1f58b60dd45c131f0027e8",
"0x63119f37cc081d3ec62808ce48a8466cb38e755dccc1d0fca23695217f1a2d11",
"0xae536fb41362ebe6eb02ba9afa030cdfefa43b372355779354f3083a318cfc02"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


