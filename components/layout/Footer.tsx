import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-primary">
              ConferenceOS
            </h3>

            <p className="mt-4 text-muted-foreground">
              AI-powered conference management platform for modern academic
              events.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Product</h4>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Workflow</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Support</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ConferenceOS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}