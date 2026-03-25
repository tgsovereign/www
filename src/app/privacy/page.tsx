import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Sovereign",
  description: "Privacy Policy for Sovereign, an AI-powered Telegram client.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-12 inline-block text-sm text-muted transition-colors hover:text-foreground"
      >
        &larr; Back to home
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-6 text-sm text-muted">Last updated: March 25, 2026</p>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Overview
          </h2>
          <p>
            Sovereign is available as both open-source self-hosted software and
            as a hosted service (SaaS) at{" "}
            <a
              href="https://web.tgsovereign.com"
              className="text-accent-light underline underline-offset-4 hover:text-accent"
            >
              web.tgsovereign.com
            </a>
            . This Privacy Policy explains how data is handled under each model.
          </p>
        </section>

        {/* --- Self-Hosted --- */}

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Self-Hosted Software
          </h2>
          <p>
            When you self-host Sovereign, all data — including Telegram messages,
            credentials, and AI model interactions — resides entirely on your own
            infrastructure. We do not collect, receive, or have access to any
            data from self-hosted installations. No telemetry, analytics, or
            tracking of any kind is included in the open-source Software.
          </p>
        </section>

        {/* --- SaaS --- */}

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Hosted Service (SaaS) — Data We Collect
          </h2>
          <p>
            When you use the hosted Service at web.tgsovereign.com, we collect
            and process the following data to provide and operate the Service:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Telegram Session Data</strong>{" "}
              — encrypted session tokens and metadata necessary to connect to
              the Telegram API on your behalf.
            </li>
            <li>
              <strong className="text-foreground">Message Data</strong> —
              Telegram messages processed by the Service in order to provide
              AI-powered features. Messages may be temporarily held in memory or
              cache for processing and are not stored longer than necessary.
            </li>
            <li>
              <strong className="text-foreground">Payment Information</strong> —
              if you subscribe to a paid plan, payment details are processed by
              our third-party payment processor. We do not store full credit card
              numbers.
            </li>
          </ul>
          <p className="mt-3">
            We only store information strictly necessary to perform the Service.
            We do not collect email addresses, usage analytics, or any data
            beyond what is required for core functionality.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. How We Use Your Data
          </h2>
          <p>We use data collected through the hosted Service to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Provide, operate, and maintain the Service.</li>
            <li>
              Process your Telegram interactions and deliver AI-powered features.
            </li>
            <li>
              Authenticate your identity and protect against unauthorized access.
            </li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Data Storage &amp; Security
          </h2>
          <p>
            Data collected through the hosted Service is stored on secure servers
            with industry-standard encryption at rest and in transit. We
            implement appropriate technical and organizational measures to
            protect your data against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
          <p className="mt-3">
            The hosted Service runs the same codebase that is publicly available
            as open source. If you discover a security vulnerability, please
            report it by opening an issue on our{" "}
            <a
              href="https://github.com/tgsovereign/core"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline underline-offset-4 hover:text-accent"
            >
              GitHub repository
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. Data Sharing &amp; Third-Party Services
          </h2>
          <p>
            We do not sell your personal data. We may share data with the
            following categories of third parties as necessary to operate the
            Service:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Telegram API</strong> — your
              messages and session data are transmitted to Telegram to provide
              core functionality. Subject to{" "}
              <a
                href="https://telegram.org/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light underline underline-offset-4 hover:text-accent"
              >
                Telegram&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong className="text-foreground">AI Model Providers</strong> —
              message content may be sent to AI providers (e.g. OpenAI,
              Anthropic) for processing. Data shared with AI providers is subject
              to their respective privacy policies.
            </li>
            <li>
              <strong className="text-foreground">Payment Processors</strong> —
              billing data is handled by our payment processor in accordance with
              PCI-DSS standards.
            </li>
            <li>
              <strong className="text-foreground">
                Infrastructure Providers
              </strong>{" "}
              — we use third-party cloud providers to host the Service. Data is
              processed in accordance with our data processing agreements with
              these providers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Data Retention
          </h2>
          <p>
            We retain your data only for as long as necessary to provide the
            Service and fulfill the purposes described in this policy. Upon
            account deletion, we will delete or anonymize your personal data
            within 30 days, except where retention is required by law or for
            legitimate business purposes (e.g. fraud prevention, dispute
            resolution).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Access</strong> — request a
              copy of the personal data we hold about you.
            </li>
            <li>
              <strong className="text-foreground">Correction</strong> — request
              that we correct inaccurate or incomplete data.
            </li>
            <li>
              <strong className="text-foreground">Deletion</strong> — request
              that we delete your personal data.
            </li>
            <li>
              <strong className="text-foreground">Portability</strong> — request
              a machine-readable export of your data.
            </li>
            <li>
              <strong className="text-foreground">Objection</strong> — object to
              certain types of processing.
            </li>
          </ul>
          <p className="mt-3">
            For self-hosted users, all data resides on your own infrastructure
            and you have full control at all times.
          </p>
          <p className="mt-3">
            To exercise any of these rights for the hosted Service, please
            contact us using the details in Section 12.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Cookies &amp; Tracking
          </h2>
          <p>
            The marketing website (tgsovereign.com) does not use cookies or
            tracking. The hosted Service at web.tgsovereign.com may use strictly
            necessary cookies for authentication and session management. We do
            not use advertising or third-party tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            10. Children&apos;s Privacy
          </h2>
          <p>
            The Software and Service are not directed to children under the age
            of 16. We do not knowingly collect personal information from
            children. If we become aware that we have collected data from a child
            under 16, we will take steps to delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            11. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            reflected on this page with an updated revision date. It is your
            responsibility to review this policy periodically. Continued use of
            the Software or Service after changes constitutes acceptance of the
            revised policy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            12. Contact
          </h2>
          <p>
            For privacy-related questions or to exercise your data rights,
            please open an issue on our{" "}
            <a
              href="https://github.com/tgsovereign/core"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline underline-offset-4 hover:text-accent"
            >
              GitHub repository
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
