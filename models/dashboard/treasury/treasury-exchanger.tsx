import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SkDiv } from "@/components/ui/sk-div";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Amount,
  buyAmounts,
  OrderType,
  orderTypes,
  sellPercentages,
  TradePair,
  tradePairs,
} from "@/app/(dashboard)/treasury/constants";
import { Combobox } from "@/components/ui/combobox";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function TreasuryExchanger({ otherBalance }: { otherBalance: Amount }) {
  const [tab, setTab] = useState<"buy" | "sell">("buy");

  return (
    <SkDiv className="grid">
      <div className="inline-flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-slate-200 bg-white px-7 py-5">
        <Tabs defaultValue="buy" className="w-full" onValueChange={(value) => setTab(value as "buy" | "sell")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <TreasuryExchangerCard tab="buy" otherBalance={otherBalance} />
          </TabsContent>

          <TabsContent value="sell">
            <TreasuryExchangerCard tab="sell" otherBalance={otherBalance} />
          </TabsContent>
        </Tabs>
      </div>
    </SkDiv>
  );
}

function TreasuryExchangerCard({ tab, otherBalance }: { tab: "buy" | "sell"; otherBalance: Amount }) {
  const [tradePair, setTradePair] = useState<TradePair>(tradePairs[0]);
  const [orderType, setOrderType] = useState<OrderType>("market");
  const [limitPrice, setLimitPrice] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  return (
    <div>
      <div className="mb-6">
        <div className="mb-1.5">Trade pair</div>
        <Combobox data={tradePairs} selectValue={setTradePair} initialValue={tradePair} />
      </div>
      <hr className="relative mb-2 h-px w-full border border-slate-100 bg-white" />
      <div className="mb-4">
        <div className="mb-1.5">Order type</div>
        <Select onValueChange={(value: OrderType) => setOrderType(value)}>
          <SelectTrigger>
            <SelectValue placeholder={orderType} />
          </SelectTrigger>
          <SelectContent>
            {orderTypes?.map((orderType) => (
              <SelectItem value={orderType} key={orderType}>
                {orderType}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {orderType === "limit" && (
        <div className="mb-2 grid w-full max-w-sm items-center gap-1.5">
          <Label className="mb-1.5" htmlFor="limit">
            Select limit price
          </Label>
          <Input id="limit" onChange={(e) => setLimitPrice(e.target.value)} />
        </div>
      )}
      <div className="mb-6 grid w-full max-w-sm items-center gap-1.5">
        <Label className="mb-1.5" htmlFor="amount">
          Select {tab === "buy" ? "amount" : "volume"}
        </Label>
        <Input id="amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
      </div>
      <div className="mb-6 flex justify-between">
        {tab === "buy" ? (
          <>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(buyAmounts[0])}
            >
              {buyAmounts[0]}
            </Button>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(buyAmounts[1])}
            >
              {buyAmounts[1]}
            </Button>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(buyAmounts[2])}
            >
              {buyAmounts[2]}
            </Button>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(buyAmounts[3])}
            >
              {buyAmounts[3]}
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(String(sellPercentages[0] * otherBalance.value))}
            >
              {sellPercentages[0] * 100 + " %"}
            </Button>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(String(sellPercentages[1] * otherBalance.value))}
            >
              {sellPercentages[1] * 100 + " %"}
            </Button>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(String(sellPercentages[2] * otherBalance.value))}
            >
              {sellPercentages[2] * 100 + " %"}
            </Button>
            <Button
              variant="outline"
              className="text-depa-gray-500 h-6 px-4 py-2 text-xs"
              onClick={() => setAmount(String(sellPercentages[3] * otherBalance.value))}
            >
              {sellPercentages[3] * 100 + " %"}
            </Button>
          </>
        )}
      </div>
      <div className="mb-6 flex justify-between">
        <span>{tab === "buy" ? "Amount" : "Volume"}</span>
        <span>{Number(amount).toFixed(2)}</span>
      </div>

      <Button className="w-full">{tab === "buy" ? "Buy" : "Sell"}</Button>
    </div>
  );
}
