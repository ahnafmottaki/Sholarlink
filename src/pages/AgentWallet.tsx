import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Wallet, ArrowUpRight, ArrowDownLeft, DollarSign } from "lucide-react";

const AgentWallet = () => {
  const balance = 2450.0;

  const transactions = [
    {
      id: "1",
      type: "credit",
      amount: 150.0,
      description: "Commission - Emily Johnson",
      date: "2024-01-20",
      status: "completed",
    },
    {
      id: "2",
      type: "credit",
      amount: 200.0,
      description: "Bonus - Referral",
      date: "2024-01-18",
      status: "completed",
    },
    {
      id: "3",
      type: "debit",
      amount: 50.0,
      description: "Withdrawal to Bank",
      date: "2024-01-15",
      status: "pending",
    },
    {
      id: "4",
      type: "credit",
      amount: 150.0,
      description: "Commission - David Lee",
      date: "2024-01-12",
      status: "completed",
    },
    {
      id: "5",
      type: "credit",
      amount: 100.0,
      description: "Commission - Sophie Chen",
      date: "2024-01-10",
      status: "completed",
    },
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Wallet</h1>
        <p className="text-muted-foreground">
          Manage your earnings and transactions
        </p>
      </div>

      {/* Balance Card */}
      <Card className="mb-8 bg-linear-to-br from-primary to-accent text-primary-foreground">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-primary-foreground/80 mb-2">
                Available Balance
              </p>
              <h2 className="text-5xl font-bold mb-6">${balance.toFixed(2)}</h2>
              <Button variant="secondary" size="lg">
                <ArrowUpRight className="h-5 w-5 mr-2" />
                Withdraw Funds
              </Button>
            </div>
            <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Wallet className="h-8 w-8" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Earned
            </CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,250.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              +20% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              This Month
            </CardTitle>
            <ArrowDownLeft className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$650.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              From 4 successful applications
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$50.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              1 withdrawal in progress
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {transaction.type === "credit" ? (
                        <ArrowDownLeft className="h-4 w-4 text-success" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-destructive" />
                      )}
                      <span className="capitalize">{transaction.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "completed"
                          ? "success"
                          : "warning"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    <span
                      className={
                        transaction.type === "credit"
                          ? "text-success"
                          : "text-destructive"
                      }
                    >
                      {transaction.type === "credit" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default AgentWallet;
