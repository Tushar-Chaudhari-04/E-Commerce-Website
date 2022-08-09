import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useState,useEffect } from 'react';
import axios from 'axios';


const Payment = () => {
   const PUBLISHABLE_KEY="pk_test_51LTTsUSBWdfNHQa5rzBVRfQWHw98loYEb26vnUbg0KZWwnw5zLU8qdjgMMpjRCbLc1nVglWFxwbDrnzSxNoFTeAk00qEFTZ07e"

    const [stripeToken,setStripeToken]=useState(null);

    const onToken = (token) =>{
        setStripeToken(token);
    }

    useEffect( ()=>{
        const makeRequest=async()=>{
            try{
                const res =await axios.post(
                    "http://localhost:3000/shopify/checkout/payment",
                    {
                        tokenId:stripeToken.id,
                        amount:1000,
                    }
                );
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        };
        // stripeToken?makeRequest:null;
        console.log(stripeToken);
    },[stripeToken]);

  return (
    <div
    style={{
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"

    }}  
    >
    <StripeCheckout
        name="Myntra" // Company/Brand name
        image="https://i0.wp.com/logotaglines.com/wp-content/uploads/2016/10/Myntra-New-Logo-Tagline-offensive-controversy.jpg?fit=750%2C750&ssl=1" // Brand Header Image (default none)
        shippingAddress
        billingAddress={false}
        zipCode={false}
        description="Your total is 1000₹"
        amount={100000} // Ruppe add two 00
        currency="INR"
        stripeKey={PUBLISHABLE_KEY}
        email="info@Myntra.co"
        token={onToken} // submit callback

        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        
        // alipay={false} // accept Alipay (default false)
        // bitcoin // accept Bitcoins (default false)
        // allowRememberMe // "Remember Me" option (default true)
        
        //opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        //closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        // reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        // triggerEvent="onTouchTap"
    >
        <button
            style={{
                border:"none",
                width:"130px",
                borderRadius:"15px",
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer"
            }}
        >
        Pay Now
        </button>
    </StripeCheckout>
    </div>
  )
}

export default Payment