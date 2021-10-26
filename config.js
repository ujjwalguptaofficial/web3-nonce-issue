const dotenv = require('dotenv');
const path = require('path');
const env = dotenv.config({
    path: path.join(__dirname, '.env')
});
module.exports = {
    rpc: {
        parent: process.env.ROOT_RPC || 'https://goerli.infura.io/v3/e729a43e7e1c4c17b3d31cfed05d780d',
        child: 'https://rpc-mumbai.maticvigil.com/',
    },
    user1: {
        "privateKey": process.env.USER1_PRIVATE_KEY || '',
        "address": process.env.USER1_FROM || ''
    },
}
