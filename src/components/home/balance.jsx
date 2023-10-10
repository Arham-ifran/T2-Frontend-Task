import { fetchBalance } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'


const Balance = () => {

    const [tokenBalance, setTokenBalance] = useState('')

    const { address } = useAccount()

    useEffect( async () => {
        const balance = await fetchBalance({
            address: address,
            token: '0x9bfd1348cf574e3eb2b114cc18374b09ad012c69',
        })
        setTokenBalance(balance)
    }, []);
    return (
        <div>
            {`Balance(${tokenBalance.symbol}): ${tokenBalance.formatted}`}
        </div>
    )
}
export default Balance