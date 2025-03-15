
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

type BuyStockDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stock: {
    symbol: string;
    currentPrice: number;
  };
};

const BuyStockDialog = ({ open, onOpenChange, stock }: BuyStockDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shares: "1",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      const shares = parseInt(values.shares);
      const totalCost = shares * stock.currentPrice;
      
      // In a real application, this would be an API call to process the purchase
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      
      toast.success(`Successfully purchased ${shares} shares of ${stock.symbol} for $${totalCost.toFixed(2)}`);
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to process purchase. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buy {stock.symbol}</DialogTitle>
          <DialogDescription>
            Current price: ${stock.currentPrice.toFixed(2)} per share
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="shares"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Shares</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-sm">
              Total Cost: ${(stock.currentPrice * parseFloat(form.watch("shares") || "0")).toFixed(2)}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Buy Shares"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BuyStockDialog;
