import { loadStripe } from "@stripe/stripe-js";
import {getSession} from 'next-auth/react'

const stripe = require('stripe')
("sk_test_51LGcnpSGIDANfYu5JTA3tI7YFLOvpa10soDcRzgFyFuwr9fwXfGKdBMJs9CGYpskmNQzkeeaCAbPFOPET5EIBfxW00oezf2e0l")
// ("sk_test_51I9VYeJmw6LbIkvtbUCWUnKkwAsgslZ09Rcae7SJB4f3d8FRfLlTYW1OLnlOdArfhnkO0YjrEU3Ja1LXk3ump5ac009CfJZHYZ");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const quantity  = req.body.data;
      // Create Checkout Sessions from body params.
      console.log(req.body)
      let transformedItem =  {price_data: {
        currency: 'usd',
        product_data: {
          name: "AYEWA",
        },
        unit_amount: 100
      },
      description: "Start Buying Ayewa",
      quantity,
      // quantity: "1000 Ayewa for USD2.5$",
    };
    
      const session = await stripe.checkout.sessions.create({
        line_items: [transformedItem],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?success=true/`,
        cancel_url: `${req.headers.origin}/?paymentForm=true`,
      });
      console.log(session)
      // res.json(200, session.url);
// const checkOutSessions = session
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }
  return {
    props:{
      session
    }
  }
}