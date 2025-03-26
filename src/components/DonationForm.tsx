
import React, { useState } from "react";
import { CreditCard, Heart, DollarSign } from "lucide-react";
import { CustomButton } from "./CustomButton";
import { CustomCard, CustomCardContent, CustomCardHeader, CustomCardTitle } from "./CustomCard";
import { CustomBadge } from "./CustomBadge";

interface DonationFormProps {
  ngoId?: string;
  ngoName?: string;
}

const DonationForm = ({ ngoId, ngoName }: DonationFormProps) => {
  const [amount, setAmount] = useState<number | undefined>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [isProcessing, setIsProcessing] = useState(false);

  const popularAmounts = [10, 25, 50, 100];

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount("");
    setIsCustomAmount(false);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setAmount(parseFloat(value) || 0);
    }
  };

  const handleCustomAmountFocus = () => {
    setIsCustomAmount(true);
    setAmount(parseFloat(customAmount) || 0);
  };

  const handleDonate = () => {
    if (!amount || amount <= 0) return;
    
    setIsProcessing(true);
    console.log("Processing donation:", {
      amount,
      type: donationType,
      ngoId,
      ngoName,
    });
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      console.log("Donation processed successfully");
      // Handle success
    }, 2000);
  };

  return (
    <CustomCard glass className="max-w-md w-full mx-auto">
      <CustomCardHeader>
        <CustomCardTitle className="text-center">
          {ngoName ? `Donate to ${ngoName}` : "Make a Donation"}
        </CustomCardTitle>
        <p className="text-center text-muted-foreground mt-2">
          Your donation will help create meaningful impact
        </p>
      </CustomCardHeader>
      <CustomCardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="donation-type">
            Donation Type
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === "one-time"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
              onClick={() => setDonationType("one-time")}
            >
              One-time
            </button>
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
              onClick={() => setDonationType("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Amount</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {popularAmounts.map((value) => (
              <button
                key={value}
                type="button"
                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  amount === value && !isCustomAmount
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
                onClick={() => handleAmountSelect(value)}
              >
                ${value}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="custom-amount">
            Custom Amount
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <DollarSign size={16} className="text-muted-foreground" />
            </div>
            <input
              id="custom-amount"
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              onFocus={handleCustomAmountFocus}
              placeholder="Enter amount"
              className="input-custom w-full pl-9"
            />
          </div>
        </div>

        <div className="pt-4">
          <CustomButton 
            fullWidth 
            leftIcon={<Heart size={16} />}
            isLoading={isProcessing}
            onClick={handleDonate}
            disabled={!amount || amount <= 0}
          >
            {isProcessing ? "Processing..." : `Donate ${amount ? `$${amount}` : ""}`}
          </CustomButton>
          <div className="flex items-center justify-center mt-4 text-xs text-muted-foreground gap-1">
            <CreditCard size={14} />
            <span>Secure payment processing</span>
          </div>
        </div>
      </CustomCardContent>
    </CustomCard>
  );
};

export default DonationForm;
