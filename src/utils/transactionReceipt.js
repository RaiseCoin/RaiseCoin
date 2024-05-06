import { useTransaction } from 'wagmi'

const transactionReceipt=(hash) =>{
  const result = useTransaction({
    hash: hash,
  })
  console.log('receipt',result)
  return result
}
export default transactionReceipt