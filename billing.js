import handler from './libs/handler-lib';
import stripePackage from 'stripe';
import { calculateCost } from './libs/billing-lib';

export const main = handler(async (evt, ctx) => {
  const { storagePreference, source } = JSON.parse(evt.body);
  const amount = calculateCost(storagePreference);
  const description = '(notes) Test charge: storage preference';

  const body = {
    source,
    amount,
    description,
    currency: 'usd'
  };

  const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

  await stripe.charges.create(body);
  return { status: true };
});