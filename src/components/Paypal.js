import React, { useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import CurrencyInput from 'react-currency-input-field';

function Paypal() {
    const [paidFor, setPaidFor] = useState(false);
    const [price, setPrice] = useState(1);

    if (paidFor) {
        return (
        <div style={{display:"flex",height:"100%", justifyContent:"center", alignItems:"center"}}>
            <h1 style={{textAlign:"center"}}>Thank you so much for your generous donation !!! <br/> &lt;3</h1>
        </div>
        );
    }

    return (
        <div style={parentDivStyle}>
            <div style={childrenDivStyle}>
                <h2>Make a donation of</h2>
                <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <CurrencyInput
                        style={inputStyle}
                        id="input-example"
                        name="input-name"
                        placeholder="1.00"
                        defaultValue={price}
                        allowDecimals={true}
                        decimalsLimit={2}
                        allowNegativeValue={false}
                        groupSeparator=" "
                        decimalSeparator="."
                        onChange={(value, name) => {value ? setPrice(value) : setPrice(1)}}
                    />
                    <h2 style={{paddingLeft:"10px"}}>&euro;</h2>
                </div>
            </div>
            <div style={paypalDivStyle}>
            <PayPalButton
                enableStandardCardFields={true}
                amount={price}
                shippingPreference="NO_SHIPPING"
                onSuccess={(details, data) => {
                setPaidFor(true);
                }}
                options={{
                    clientId: "AYVN9YJTNRI6tDRQBGkyyU82wJFRZLLFVKmdUNhNlti4UOpDPMxjY8f5sg-anqn_vNhBUh9QvD85zCbF",
                    currency:"EUR",
                }}
            />
            </div>
        </div>
    );
}

const paypalDivStyle = {
    alignSelf:"stretch",
}

const parentDivStyle = {
    height:"100%",
    display: "flex",
    alignItems:"stretch",
    flexDirection:"column"
}

const childrenDivStyle = {
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    flexGrow:"1"
}

const inputStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign:"center",
    padding: "8px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
}

export default Paypal;