"use client";

import { ReactNode } from "react";

interface PaymentIconProps {
  children: ReactNode;
}

/**
 * Unified wrapper component for payment/crypto icons
 * Ensures consistent sizing and styling across all icons
 * 
 * Card size: 56x40px (w-14 h-10)
 * Icon size: 24px (w-6 h-6)
 * All icons are centered and properly scaled
 */
export function PaymentIcon({ children }: PaymentIconProps) {
  return (
    <div className="flex items-center justify-center w-14 h-10 p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group leading-none">
      <div className="w-6 h-6 flex items-center justify-center text-white [&>svg]:w-full [&>svg]:h-full [&>svg]:block [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:object-contain">
        {children}
      </div>
    </div>
  );
}
