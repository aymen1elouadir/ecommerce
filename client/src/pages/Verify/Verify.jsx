import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    // Verify payment status with the backend
    const verifyPayment = async () => {
        try {
            const response = await axios.post(url + "/api/order/verify", { success, orderId });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Payment verification failed:", error);
            navigate("/");
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
            {/* Neumorphic spinner card */}
            <div className="p-10 bg-[#e0e5ec] rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center gap-6">
                {/* Spinning ring */}
                <div className="w-16 h-16 rounded-full border-4 border-[#e0e5ec] border-t-indigo-600 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] animate-spin" />
                <div className="text-center">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] mb-1">Processing</p>
                    <p className="text-xl font-black text-gray-800">Verifying Payment</p>
                    <p className="text-sm text-gray-500 font-medium mt-1">Please wait, do not close this page...</p>
                </div>
            </div>
        </div>
    );
};

export default Verify;