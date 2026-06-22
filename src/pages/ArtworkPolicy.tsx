const ArtworkPolicy = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Artwork Approval / Production Policy</h1>
        <p className="text-white/80">Last updated: January 2025</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm">
        <h2 className="text-2xl font-bold text-foreground mb-4">Artwork & Production Policy</h2>
        <p className="text-muted-foreground mb-4">
          At Custom Packaging Line, we are committed to delivering packaging that perfectly represents your brand. Our artwork approval and production process is designed to ensure accuracy, quality, and customer satisfaction at every stage. Please review the guidelines below to help us produce the best possible results for your custom packaging order.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Artwork Submission Guidelines</h3>
        <p className="text-muted-foreground mb-4">
          To ensure the highest print quality, we require artwork files to be submitted in one of the following formats:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
          <li><strong>Adobe Illustrator (.AI)</strong>: Preferred format for vector-based artwork. All fonts must be outlined and images embedded.</li>
          <li><strong>PDF (Press-Ready)</strong>: High-resolution PDF files with fonts embedded and images at 300 DPI or higher.</li>
          <li><strong>Adobe Photoshop (.PSD)</strong>: Layered PSD files at 300 DPI minimum resolution with all layers flattened or organized.</li>
          <li><strong>PNG (300 DPI)</strong>: High-resolution PNG files are accepted for simpler designs. Transparent backgrounds are recommended where applicable.</li>
        </ul>
        <p className="text-muted-foreground mb-4">
          Artwork should be submitted at actual print size with a minimum resolution of 300 DPI. Files submitted at lower resolutions may result in pixelation or blurry print output. If you do not have print-ready artwork, our in-house design team can assist you for an additional fee.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Color Matching</h3>
        <p className="text-muted-foreground mb-4">
          Custom Packaging Line uses industry-standard CMYK printing for most orders. For precise brand color matching, we strongly recommend providing Pantone (PMS) color codes with your artwork submission. Please note that colors displayed on computer monitors may vary from printed output due to differences between RGB screen display and CMYK print output. We offer Pantone spot color printing for orders that require exact color fidelity. If specific Pantone colors are required, please indicate them clearly in your artwork files or order notes.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">3D Mockup Approval Process</h3>
        <p className="text-muted-foreground mb-4">
          Before production begins, our design team will prepare a detailed 3D digital mockup of your packaging for your review. This mockup will show how your artwork will appear on the final product, including placement, sizing, and color representation. You will receive the mockup via email and must provide written approval before we proceed to production. Please review the mockup carefully, as Custom Packaging Line is not responsible for errors that were present in the approved mockup. We allow up to three rounds of revisions on your mockup at no additional charge. Additional revision rounds may incur a design fee.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Changes After Approval</h3>
        <p className="text-muted-foreground mb-4">
          Once you have approved your 3D mockup and production has begun, changes to artwork, dimensions, materials, or quantities are no longer possible. Any modifications requested prior to production approval will be accommodated wherever feasible. If changes are needed after approval but before production starts, please contact us immediately at support@custompackagingline.com. Approved changes may affect your production timeline and could result in additional charges depending on the nature of the modification.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Production Timeline</h3>
        <p className="text-muted-foreground mb-4">
          Standard production time is 8-10 business days from the date of final artwork approval. Production timelines do not include shipping transit time. Rush production may be available for an additional fee, please contact our sales team to discuss expedited options. Factors that may affect production time include order complexity, material availability, quantity, and finishing options such as embossing, foil stamping, or spot UV coating. Custom Packaging Line will notify you promptly if any delays are anticipated.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Quality Assurance</h3>
        <p className="text-muted-foreground mb-4">
          Every order produced by Custom Packaging Line undergoes rigorous quality checks throughout the manufacturing process. Our quality assurance team inspects materials, print accuracy, color consistency, structural integrity, and finishing quality before any order is shipped. We maintain strict tolerances for color variation, die-cut precision, and material quality. In the rare event that a quality issue is identified, we will contact you to discuss options before shipping. Our goal is to ensure that every box that leaves our facility meets the highest standards of craftsmanship and accuracy.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Contact Us</h3>
        <p className="text-muted-foreground mb-4">
          If you have questions about artwork preparation, the approval process, or production timelines, please reach out to our team at support@custompackagingline.com or call +1 (970) 794-3622. We are here to help you every step of the way.
        </p>
      </div>
    </section>
  </>
);

export default ArtworkPolicy;
