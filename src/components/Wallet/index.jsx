import { useAppKit } from "@reown/appkit/react";
import React from "react";
import { useAccount, useAccountEffect } from "wagmi";
import ShowBalance from "./ShowBalance.jsx";
import { compactHash } from "@/utils/hash";

export default function Wallet() {
  const { open } = useAppKit();
  const { address, isReconnecting } = useAccount();

  useAccountEffect({
    onConnect(data) {
      // if(data)
      if (data?.chainId === 1) {
        setTimeout(() => {
          open({ view: "Networks" });
        }, 1000);
      }
    },
  });

  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex items-center gap-x-1">
        {address && <ShowBalance />}
        <button
          onClick={() =>
            !isReconnecting && open({ view: address ? "Account" : "Connect" })
          }
          className="border border-primary"
        >
          {address ? (
            <span className="rotate-90 text-xs">{address}</span>
          ) : (
            <p>connect</p>
          )}
        </button>
      </div>
    </header>
  );
}
