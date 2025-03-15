
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  shares: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid number of shares",
  }),
});

type SellStockDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stock: {
    symbol: string;
    currentPrice: number;
    ownedShares: number;
  };
};

const SellStockDialog = ({ open, onOpenChange, stock }: SellStockDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shares: "1",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const shares = parseInt(values.shares);
      
      if (shares > stock.ownedShares) {
        form.setError("shares", { 
          type: "manual", 
          message: `You only own ${stock.ownedShares} shares of ${stock.symbol}` 
        });
        return;
      }
      
      setIsLoading(true);
      const totalValue = shares * stock.currentPrice;
      
      // In a real application, this would be an API call to process the sale
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      
      toast.success(`Successfully sold ${shares} shares of ${stock.symbol} for $${totalValue.toFixed(2)}`);
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to process sale. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sell {stock.symbol}</DialogTitle>
          <DialogDescription>
            Current price: ${stock.currentPrice.toFixed(2)} per share
            <br />
            You own: {stock.ownedShares} shares
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="shares"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Shares to Sell</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1" 
                      max={stock.ownedShares.toString()} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-sm">
              Total Value: ${(stock.currentPrice * parseFloat(form.watch("shares") || "0")).toFixed(2)}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Sell Shares"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SellStockDialog;
