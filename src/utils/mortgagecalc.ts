
type Data = {
    purchasePrice: number;
    interest: number;
    downPayment:number;
    years:number
  }



export const calc = (data: Data): { loan:number, repay: number}  => {

    const principal = data.purchasePrice-data.downPayment;
    const i = data.interest*.01/12;
    const n = data.years*12;
    const M =  principal*(i*((i+1)**n)/(((1+i)**n)-1));
    
    // return M = principal*i*((i+1)**n/(((1+i)**n)-1));
    return {
        loan: principal,
        repay: Math.floor(M)
    }
}

