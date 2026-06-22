const PaymentPolicy = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Payment Methods / Billing Policy</h1>
        <p className="text-white/80">Last updated: January 2025</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm">
        <h2 className="text-2xl font-bold text-foreground mb-4">Payment & Billing Policy</h2>
        <p className="text-muted-foreground mb-4">
          Custom Packaging Line offers flexible and secure payment options to make ordering custom packaging as convenient as possible. This policy outlines our accepted payment methods, billing procedures, and related terms. All transactions are processed securely through encrypted payment gateways to protect your financial information.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Accepted Payment Methods</h3>
        <p className="text-muted-foreground mb-4">
          We accept a wide range of payment methods to accommodate both individual and business customers:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
          <li><strong>Visa</strong>: Credit and debit cards accepted.</li>
          <li><strong>Mastercard</strong>: Credit and debit cards accepted.</li>
          <li><strong>American Express (Amex)</strong>: Credit cards accepted.</li>
          <li><strong>Discover</strong>: Credit and debit cards accepted.</li>
          <li><strong>PayPal</strong>: Pay securely using your PayPal account balance, linked bank account, or card.</li>
          <li><strong>Bank Transfer (ACH/Wire)</strong>: Available for wholesale and large orders. Wire transfer details will be provided upon request.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">Billing Process</h3>
        <p className="text-muted-foreground mb-4">
          For standard orders placed through our website, payment is collected in full at the time of checkout. Your payment will be processed immediately and you will receive an email confirmation with your order details and receipt. For orders placed via phone or email with our sales team, an invoice will be sent to you with payment instructions. All invoices are due upon receipt unless alternate terms have been arranged in advance.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Deposit Requirements for Large Orders</h3>
        <p className="text-muted-foreground mb-4">
          For large or bulk custom packaging orders exceeding $2,000 in total value, Custom Packaging Line requires a 50% deposit before production begins. The remaining 50% balance is due upon completion of production and before shipment. This deposit is non-refundable once production has commenced, as custom products are manufactured specifically to your order. Deposit invoices will be issued by our sales team with clear payment terms and due dates.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Wholesale & Business Invoicing</h3>
        <p className="text-muted-foreground mb-4">
          Custom Packaging Line offers invoicing options for established wholesale and business accounts. Qualified businesses may apply for Net 15 or Net 30 payment terms based on order volume and account history. To set up a wholesale account or inquire about business invoicing, please contact our sales team at support@custompackagingline.com. All wholesale invoices must be paid within the agreed-upon terms. Late payments may incur a 1.5% monthly interest charge on the outstanding balance and may result in suspension of credit terms.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Currency & Pricing</h3>
        <p className="text-muted-foreground mb-4">
          All prices displayed on the Custom Packaging Line website are listed in United States Dollars (USD). Prices are subject to change without prior notice, but any price changes will not affect orders that have already been confirmed and paid for. Quoted prices are valid for 30 days from the date of the quote unless otherwise specified. For international customers, your bank or payment provider may apply currency conversion fees, which are the responsibility of the customer.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Sales Tax</h3>
        <p className="text-muted-foreground mb-4">
          Custom Packaging Line collects sales tax in states where we are required to do so by law. Applicable sales tax will be calculated and displayed at checkout based on your shipping address. If you are a tax-exempt organization, please provide a valid tax exemption certificate before placing your order by emailing it to support@custompackagingline.com. Tax-exempt status will be applied to your account once your certificate has been verified.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Payment Security</h3>
        <p className="text-muted-foreground mb-4">
          Your payment security is our top priority. All payment transactions on our website are processed through PCI-DSS compliant payment gateways with 256-bit SSL encryption. We do not store your full credit card information on our servers. Payment data is handled entirely by our secure third-party payment processors. If you have any concerns about payment security, please contact us at support@custompackagingline.com or call +1 (970) 794-3622.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Contact Us</h3>
        <p className="text-muted-foreground mb-4">
          For questions about payments, billing, invoicing, or account setup, please contact our team at support@custompackagingline.com or call +1 (970) 794-3622. Our billing department is available Monday through Friday, 9:00 AM to 6:00 PM EST.
        </p>
      </div>
    </section>
  </>
);

export default PaymentPolicy;
