import { SkDiv } from "@/components/ui/sk-div";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  ChartLegendContent,
  ChartLegend,
} from "@/components/ui/chart";
export function DashboardInfoWrapper() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;
  return (
    <div className="grid max-h-[200px] grid-cols-[1fr_1.8fr] grid-rows-1">
      <SkDiv className="grid grid-cols-2 grid-rows-2 gap-x-8">
        <DashboardInfoCard
          title="Amount transacted
"
          value="100"
        />
        <DashboardInfoCard title="New users" value="1343400" />
        <DashboardInfoCard title="Transactions" value="123400" />
        <DashboardInfoCard
          title="Fiat Deposits
"
          value="102340"
        />
      </SkDiv>
      <SkDiv className="">
        <ChartContainer config={chartConfig} className="max-h-[200px] min-h-[100px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <ChartLegend layout="vertical" verticalAlign="top" align="right" content={<ChartLegendContent />} />
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />

            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </SkDiv>
    </div>
  );
}

export function DashboardInfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="grid grid-rows-[1fr_3fr]">
      <span className="mb-2 text-base font-normal leading-normal text-primary">{title}</span>
      <span className="text-2xl font-semibold leading-9 text-primary">{value}</span>
    </div>
  );
}
