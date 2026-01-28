import Bills from "@/components/bills";
import Budgets from "@/components/budgets";
import PotsHomePage from "@/components/pots-homepage";
import Transactions from "@/components/transactions";
import Card from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-400 min-h-screen flex-col">
      <h1 className="text-1 text-grey-900">Overview</h1>

      {/* Balances */}
      <section className="flex flex-col md:flex-row gap-300 md:items-center md:justify-between">
        <Card category="Current Balance" amount={'4,836.00'} variation="dark" />
        <Card category="Income" amount={'3,814.25'} />
        <Card category="Expenses" amount={'1,700.50'} />
      </section>

      <div className="flex flex-col md:flex-row md:items-start gap-300 h-full">
        <div className="flex-1 flex flex-col gap-300 self-stretch">
          <PotsHomePage />
          <Transactions />
        </div>
        <div className="flex-1 flex flex-col gap-300 self-stretch">
          <Budgets />
          <Bills />
        </div>
      </div>
    </div>
  );
}
