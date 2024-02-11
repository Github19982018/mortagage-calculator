import {useState} from 'react'
import { Input } from './components/Input.tsx'
import { Heading } from './components/Heading.tsx';
import { Textbox } from './components/Textbox.tsx';
import './Container.css'

import { calc } from './utils/mortgagecalc.ts';
import {Data} from './Types.ts'
type Data = {
  purchasePrice: number;
  interest: number;
  downPayment:number;
  years:number
}

export const Container = () => {
  const [data, setData] = useState<Data>({purchasePrice:400000,interest:6,downPayment:135000,years:20});

  const purchaseMax = 1000000;
  const downPaymentMax = data.purchasePrice;
  const yearsMax = 40;
  const interestMax = 50;

  const purchaseHandler = (e) => {
    setData({...data, purchasePrice:e.target.value})
  }
  const downPaymentandler = (e) => {
    setData({...data, downPayment:e.target.value})
  }
  const repaymentHandler = (e) => {
    setData({...data, years:Math.floor(e.target.value)})
  }
  const interesHandler = (e) => {
    setData({...data, interest:Math.floor(e.target.value)})
  }
 
  const result = calc(data);

 
  return (
    <div className='main'>
        <div className='wrapper'>
           <Heading />
              <div className='container'>
                <Input 
                label={"Purchase price"} 
                value={data.purchasePrice}
                maxVal={purchaseMax} 
                sign={"$"}
                handler={(e) => purchaseHandler(e)}/>

                <Input  label={"Down payment"} 
                value={data["downPayment"]} 
                maxVal={downPaymentMax} 
                sign={"$"}
                handler={(e) => downPaymentandler(e)}/>

                <Input  label={"Repayment time"} 
                value={data["years"]} 
                maxVal={yearsMax} 
                sign={'years'}
                handler={(e) => repaymentHandler(e)}/>
                
                <Input  label={"Interest rate"}
                 value={data["interest"]} 
                maxVal={interestMax}
                sign={'%'}
                 handler={(e) => interesHandler(e)}/>
                <Textbox label={"Loan amount:"}
                 sublabel={"$"+result.loan}/>
                <Textbox label={"Estimated pr. month:"}
                 sublabel={"$"+result.repay}/>
                {/* <Button /> */}
              </div>
                
        </div>
    </div>
  )
}
