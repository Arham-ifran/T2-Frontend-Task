import { fetchBalance } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'


const Balance = () => {


    const [balance, setBalance] = useState('')
    const { address } = useAccount()

    useEffect(() => {
        if (address) {

            const balanceCall = async () => { try {
                let balanceRes = await fetchBalance({
                    address: address,
                    token: '0x9bfd1348cf574e3eb2b114cc18374b09ad012c69',
                })
                setBalance(balanceRes)
            } catch (err) {
                console.log('err')
                console.log(err)
            }

            }
            
            balanceCall()
        } else {
            alert('please connect wallet')
        }
    }, []);


    return (
        <div>
            {balance ?
                <>
                    {`Balance(${balance?.symbol}): ${balance?.formatted}`}
                </>
                :
                "Wallet not connected"
            }
        </div>
    )
}
export default Balance