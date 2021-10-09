require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note rifle comfort install enrich tail sword'; 
let testAccounts = [
"0x9277c9d8511d00aaf00ef9df8f0b5c5329849877ee884e83ba954702578a2e77",
"0x93298744c4523638923e126f51d8da048e040160485c4418fff9b026618f584c",
"0x50ddda282d3e1aea07ec20b2b943ee4420a234a62c9e3f2dad013176a88ab8bc",
"0x2acfa476faeb489083146e3f0bf3683cbf0a6e06908d179dad1a7ea4fe5091e4",
"0xe579db88d2d0995644fe018b82b7b527253a8d00f40ae0bdae2c4965bae668e9",
"0xd94eae6b0f7ed0fbc8ede7e6b391960703654017d3b1b1cbca72336669128f53",
"0x2346d7d6524a7b3aca4b5ef8f231e96d2ff585441c1bafb8fd3fcb763853b89a",
"0xe072d9a5c1912151dd01244206f9443972663c6b41a1d3ce90d3817cf6b974da",
"0x0caac21a7f28840aab5515f979cf8425b736253727da82040ee127da675de5fb",
"0x5d9848bf997139d387b5c6aefcac75eac4b466972c9b42f15c7692716978ad31"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

