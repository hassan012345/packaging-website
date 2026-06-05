const Policies = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Privacy & Policy</h1>
        <p className="text-white/80">Last updated: January 2024</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm">
        <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
        <p className="text-muted-foreground mb-4">
          At Custom Packaging Lane, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h3>
        <p className="text-muted-foreground mb-4">
          We may collect personal information such as your name, email address, phone number, shipping address, and payment information when you place an order, request a quote, or contact us through our website.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h3>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
          <li>To process and fulfill your orders</li>
          <li>To communicate with you about your orders and inquiries</li>
          <li>To send you promotional materials (with your consent)</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">Data Security</h3>
        <p className="text-muted-foreground mb-4">
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Cookies</h3>
        <p className="text-muted-foreground mb-4">
          Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Contact Us</h3>
        <p className="text-muted-foreground mb-4">
          If you have questions about this Privacy Policy, please contact us at support@custompackaginglane.com.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4 mt-10">Terms of Service</h2>
        <p className="text-muted-foreground mb-4">
          By using our website and services, you agree to these terms. All custom packaging orders are subject to our standard production timeline of 8-10 business days after design approval. Rush orders are available for an additional fee.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Returns & Refunds</h3>
        <p className="text-muted-foreground mb-4">
          Due to the custom nature of our products, all sales are final once production has begun. We will replace any order that arrives damaged or does not match the approved design proof.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Shipping Policy</h3>
        <p className="text-muted-foreground">
          We offer free standard shipping within the continental United States. International shipping rates are calculated at checkout. All orders include tracking information.
        </p>
      </div>
    </section>
  </>
);

export default Policies;
