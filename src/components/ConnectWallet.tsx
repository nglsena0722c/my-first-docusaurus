// 그냥 WalletWrap 씌우고 안에 컴포넌트 넣으면 되므로, 얘는 이제 필요 없음. 혹시 몰라서 남겨놓는다.

import React from "react";
import Connect from "./Connect"
import WalletWrap from "./WalletWrap"

const ConnectWallet = () => {
    return <WalletWrap>
        <Connect />
    </WalletWrap>
}

export default ConnectWallet;