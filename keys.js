// can use `process.env.SECRET_MNEMONIC` or `process.env.SECRET_PRIV_KEY`
// to populate secret in CI environment instead of hardcoding

module.exports = {
    test: {
        mnemonic: "puzzle glide follow cruel say burst deliver wild tragic galaxy lumber offer",
    },

    
    alice: {
        privateKey: "43792143508f053a8b82dd83e1d56c82dc04cd0fcc86220175ef591911fa65c1",
    },
};
