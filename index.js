const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const { rpc, user1 } = require('./config');

const from = user1.address;
const privateKey = user1.privateKey;

const execute = async () => {
    const web3Parent = new Web3(new HDWalletProvider(privateKey, rpc.parent))
    const web3Child = new Web3(new HDWalletProvider(privateKey, rpc.child))



    const nonceChild = await web3Child.eth.getTransactionCount(from, 'pending');
    console.log('nonce', nonceChild);

    const nonceParent = await web3Parent.eth.getTransactionCount(from, 'pending');
    console.log('nonce', nonceParent);
}

execute().then(_ => {
    process.exit(0)
}).catch(err => {
    console.error(err);
    process.exit(0);
})


