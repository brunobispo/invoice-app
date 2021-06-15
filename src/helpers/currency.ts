const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const currency = (amount: number) => currencyFormatter.format(amount);

export default currency;
