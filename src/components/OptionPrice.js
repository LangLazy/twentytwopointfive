import React, { useState } from 'react'

//Fix the format to make it look nice
//Add checkbox options which will adjust which options are shown
//Add the computation to actually compute the thing
//add random walk self replicating
//add binomial tree self replicating
//add faq and explanation page

const OptionPricer = () =>{    
    
    const initialFieldVal = {
        underlyingAssetPrice: "",
        strikePrice: "",
        timeTillExpiry: "",
        risklessRate: "",
        varianceInAssetPrice: ""
    }
    const onType = (e) =>{
        const {name, value} = e.target;
        console.log(name, value);
        setVals({
            ...vals,
            [name]: value
        });
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        const underlyingAssetPrice = parseInt(e.target.underlyingAssetPrice.value)
        const strikePrice = parseInt(e.target.strikePrice.value)
        const timeTillExpiry = parseInt(e.target.timeTillExpiry.value)
        const risklessRate = parseInt(e.target.risklessRate.value)
        const varianceInAssetPrice = parseInt(e.target.varianceInAssetPrice.value)
        if (isNaN(underlyingAssetPrice) || isNaN(strikePrice) || isNaN(timeTillExpiry) || isNaN(risklessRate) || isNaN(varianceInAssetPrice)){
            setErrState(true)
        }
        else{setErrState(false)}
        const ans = underlyingAssetPrice + strikePrice + timeTillExpiry + risklessRate + varianceInAssetPrice;
        setAnsw(ans)
    }
    const [vals, setVals] = useState(initialFieldVal)
    const [answ, setAnsw] = useState("")
    const [errState, setErrState] = useState(false)
    return (
            <div>
                <h1>{answ ==="" ? "Fill out the fields below to find option price": answ }</h1>
                <form onSubmit={onSubmit}> 
                    <input
                        value ={vals.underlyingAssetPrice}
                        name = "underlyingAssetPrice"
                        label = "Underlying Asset Price"
                        onChange={onType}
                    />
                    <input
                        value ={vals.strikePrice}
                        name = "strikePrice"
                        label = " Strike Price"
                        onChange={onType}
                    />
                    <input
                        value ={vals.timeTillExpiry}
                        name = "timeTillExpiry"
                        label = "Time until option expiry date"
                        onChange={onType}
                    />
                    <input
                        value ={vals.risklessRate}
                        name = "risklessRate"
                        label = "Current riskless rate in the market (10yr federal bond rate)"
                        onChange={onType}
                    />
                    <input
                        value ={vals.varianceInAssetPrice}
                        name = "varianceInAssetPrice"
                        label = "Variance in Asset Price"
                        onChange={onType}
                    />
                    <button type="submit">
                        Compute                      
                    </button>
                </form>
                <div>{errState ? "Invalid input provided, enusre all fields are numbers":""}</div>
            </div>
        )
}

export default OptionPricer
