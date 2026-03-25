import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Sovereign",
  description: "Terms of Service for Sovereign, an AI-powered Telegram client.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-12 inline-block text-sm text-muted transition-colors hover:text-foreground"
      >
        &larr; Back to home
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-6 text-sm text-muted">Last updated: March 25, 2026</p>

      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Sovereign — whether through our hosted service
            at{" "}
            <a
              href="https://web.tgsovereign.com"
              className="text-accent-light underline underline-offset-4 hover:text-accent"
            >
              web.tgsovereign.com
            </a>{" "}
            (&quot;the Service&quot;) or via the self-hosted open-source
            software (&quot;the Software&quot;) — you agree to be bound by these
            Terms of Service. If you do not agree, do not use Sovereign in any
            form.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            2. Description of Service
          </h2>
          <p>
            Sovereign is an AI-powered Telegram client that allows you to read,
            search, send messages, and run autonomous tasks on your behalf.
            Sovereign is available in two forms:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Self-Hosted</strong> — the
              open-source Software, provided under the MIT License, which you
              deploy and operate on your own infrastructure.
            </li>
            <li>
              <strong className="text-foreground">Hosted (SaaS)</strong> — a
              managed version of Sovereign operated by us at
              web.tgsovereign.com, which may include additional features,
              integrations, and capabilities not available in the self-hosted
              version.
            </li>
          </ul>
        </section>

        {/* --- Self-Hosted --- */}

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            3. Self-Hosted Software
          </h2>
          <p>
            If you choose to self-host Sovereign, you are solely responsible for
            the deployment, configuration, security, and maintenance of your
            instance. We do not host, operate, or have access to self-hosted
            installations. The self-hosted Software is provided under the MIT
            License and the warranty disclaimers in Section 10 apply in full.
          </p>
        </section>

        {/* --- SaaS --- */}

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4. Hosted Service (SaaS) — Additional Terms
          </h2>
          <p>
            The following terms apply specifically to users of the hosted Service
            at web.tgsovereign.com, in addition to all other sections of these
            Terms:
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4.1 Account &amp; Eligibility
          </h2>
          <p>
            You must provide accurate and complete information when creating an
            account. You are responsible for maintaining the confidentiality of
            your account credentials and for all activity that occurs under your
            account. You must be at least 16 years of age to use the Service.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4.2 Acceptable Use
          </h2>
          <p>You agree not to use the Service to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Violate any applicable law, regulation, or third-party rights,
              including Telegram&apos;s Terms of Service and API Terms of Use.
            </li>
            <li>
              Send spam, bulk unsolicited messages, or engage in any form of
              automated abuse.
            </li>
            <li>
              Impersonate any person or entity, or misrepresent your affiliation
              with any person or entity.
            </li>
            <li>
              Distribute malware, phishing links, or other harmful content.
            </li>
            <li>
              Attempt to gain unauthorized access to other users&apos; accounts,
              our systems, or any connected third-party service.
            </li>
            <li>
              Use the Service in any manner that could damage, disable,
              overburden, or impair our infrastructure.
            </li>
            <li>
              Circumvent any rate limits, access controls, or security measures
              implemented by us.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4.3 Suspension &amp; Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to the
            Service at any time, at our sole discretion, with or without cause
            and with or without notice. Reasons for suspension or termination
            may include, but are not limited to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Violation of these Terms or the Acceptable Use policy.</li>
            <li>
              Conduct that we reasonably believe is harmful to other users, third
              parties, or our business.
            </li>
            <li>
              Requests from law enforcement or other government agencies.
            </li>
            <li>
              Extended periods of inactivity.
            </li>
            <li>
              Unexpected technical or security issues.
            </li>
          </ul>
          <p className="mt-3">
            Upon termination, your right to use the Service ceases immediately.
            We may, but are not obligated to, provide you with an opportunity to
            retrieve your data prior to deletion.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4.4 Service Availability
          </h2>
          <p>
            We strive to maintain high availability of the Service but do not
            guarantee uninterrupted or error-free operation. The Service may be
            temporarily unavailable due to scheduled maintenance, upgrades, or
            circumstances beyond our control. We shall not be liable for any
            downtime or service interruptions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            4.5 Fees &amp; Payment
          </h2>
          <p>
            Certain features of the Service may require a paid subscription. If
            applicable, fees, billing cycles, and payment terms will be
            presented to you before purchase. All fees are non-refundable unless
            otherwise required by applicable law. We reserve the right to change
            pricing with reasonable advance notice.
          </p>
        </section>

        {/* --- Shared terms --- */}

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Telegram Compliance
          </h2>
          <p>
            Regardless of whether you use the self-hosted Software or the hosted
            Service, your use of Sovereign involves interaction with the Telegram
            API. You agree to comply with{" "}
            <a
              href="https://telegram.org/tos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline underline-offset-4 hover:text-accent"
            >
              Telegram&apos;s Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://core.telegram.org/api/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline underline-offset-4 hover:text-accent"
            >
              API Terms of Use
            </a>{" "}
            at all times. We are not affiliated with Telegram and are not
            responsible for any actions taken by Telegram in response to your use
            of their platform, including account restrictions or bans.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            6. AI &amp; Autonomous Actions
          </h2>
          <p>
            Sovereign may perform actions autonomously on your behalf, including
            sending messages, responding to conversations, and executing tasks.
            You acknowledge that:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              You are solely responsible for configuring the Software or Service
              appropriately.
            </li>
            <li>
              AI-generated content may be inaccurate, inappropriate, or
              unintended.
            </li>
            <li>
              You are responsible for all actions taken by Sovereign using your
              credentials, whether initiated manually or autonomously.
            </li>
            <li>
              We disclaim all liability for damages arising from autonomous
              actions performed on your behalf.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            7. Intellectual Property
          </h2>
          <p>
            The Sovereign open-source Software is licensed under the MIT License.
            The hosted Service, including any proprietary features, branding,
            design, and additional functionality not included in the open-source
            release, is owned by us and protected by applicable intellectual
            property laws. You may not copy, modify, or distribute the
            proprietary components of the Service.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless Sovereign and its
            maintainers, officers, employees, and agents from and against any
            claims, liabilities, damages, losses, costs, or expenses (including
            reasonable attorneys&apos; fees) arising out of or related to your
            use of the Software or Service, your violation of these Terms, or
            your violation of any rights of a third party.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            9. Governing Law &amp; Dispute Resolution
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            applicable law, without regard to conflict-of-law principles. Any
            disputes arising under these Terms shall first be attempted to be
            resolved through good-faith negotiation. If unresolved, disputes
            shall be submitted to binding arbitration in a mutually agreed
            jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            10. Disclaimer of Warranties
          </h2>
          <p>
            The Software and Service are provided &quot;as is&quot; and &quot;as
            available&quot;, without warranty of any kind, express or implied,
            including but not limited to the warranties of merchantability,
            fitness for a particular purpose, non-infringement, and any
            warranties arising out of course of dealing or usage of trade.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            11. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall
            Sovereign, its maintainers, or affiliates be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            or any loss of profits, revenue, data, or goodwill, whether incurred
            directly or indirectly, arising from your use of or inability to use
            the Software or Service. Our total aggregate liability for any claims
            arising under these Terms shall not exceed the amount you paid us, if
            any, in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            12. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be reflected on this page with an updated revision date. It is your
            responsibility to review these Terms periodically. Continued use of
            the Software or Service after changes constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            13. Contact
          </h2>
          <p>
            For questions about these Terms, please open an issue on our{" "}
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
