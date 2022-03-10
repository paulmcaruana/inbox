const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    '',// remember to add/remove mneumonic as required.
    'https://rinkeby.infura.io/v3/1bb97179370a4c1aa13c272c2248ff0b'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract  delpoyed to ', result.options.address);
    provider.engine.stop();   
};

deploy();