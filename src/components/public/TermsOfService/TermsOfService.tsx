import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const TermsOfService = () => {
  return (
    <main className="w-full max-w-3xl mx-auto py-12 px-4 md:px-6 text-gray-900 dark:text-gray-100">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="text-gray-500 dark:text-gray-400 italic">
          These terms and conditions outline the rules and regulations for the
          use of Ldvloper&apos;s Website, located at
          task-scheduler.ldvloper.com.
        </p>
        <p className="mb-4">
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Task Scheduler if you do not agree
          to take all of the terms and conditions stated on this page.
        </p>
        <p className="mb-4">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements:
          &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to
          you, the person logging on to this website and compliant with the
          Company&apos;s terms and conditions. &quot;The Company&quot;,
          &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
          &quot;Us&quot;, refers to our Company. &quot;Party&quot;,
          &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and
          ourselves. All terms refer to the offer, acceptance, and consideration
          of payment necessary to undertake the process of our assistance to the
          Client in the most appropriate manner for the express purpose of
          meeting the Client&apos;s needs in respect of provision of the
          Company&apos;s stated services, in accordance with and subject to,
          prevailing law of NL. Any use of the above terminology or other words
          in the singular, plural, capitalization and/or he/she or they, are
          taken as interchangeable and therefore as referring to the same.
        </p>
        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">Cookies</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                We employ the use of cookies. By accessing Task Scheduler, you
                agreed to use cookies in agreement with the Ldvloper&apos;s
                Privacy Policy.
              </p>
              <p>
                Most interactive websites use cookies to let us retrieve the
                user&apos;s details for each visit. Cookies are used by our
                website to enable the functionality of certain areas to make it
                easier for people visiting our website. Some of our
                affiliate/advertising partners may also use cookies.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">License</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                Unless otherwise stated, Ldvloper and/or its licensors own the
                intellectual property rights for all material on Task Scheduler.
                All intellectual property rights are reserved. You may access
                this from Task Scheduler for your own personal use subject to
                restrictions set in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Republish material from Task Scheduler</li>
                <li>Sell, rent or sub-license material from Task Scheduler</li>
                <li>
                  Reproduce, duplicate or copy material from Task Scheduler
                </li>
                <li>Redistribute content from Task Scheduler</li>
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">Comments</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website. Ldvloper does not filter, edit, publish or review
                Comments prior to their presence on the website. Comments do not
                reflect the views and opinions of Ldvloper, its agents and/or
                affiliates. Comments reflect the views and opinions of the
                person who posts their views and opinions. To the extent
                permitted by applicable laws, Ldvloper shall not be liable for
                the Comments or for any liability, damages or expenses caused
                and/or suffered as a result of any use of and/or posting of
                and/or appearance of the Comments on this website.
              </p>
              <p>
                Ldvloper reserves the right to monitor all Comments and to
                remove any Comments which can be considered inappropriate,
                offensive or causes breach of these Terms and Conditions.
              </p>
              <p>You warrant and represent that:</p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;
                </li>
                <li>
                  The Comments do not invade any intellectual property right,
                  including without limitation copyright, patent or trademark of
                  any third party;
                </li>
                <li>
                  The Comments do not contain any defamatory, libelous,
                  offensive, indecent or otherwise unlawful material which is an
                  invasion of privacy;
                </li>
                <li>
                  The Comments will not be used to solicit or promote business
                  or custom or present commercial activities or unlawful
                  activity.
                </li>
              </ul>
              <p>
                You hereby grant Ldvloper a non-exclusive license to use,
                reproduce, edit and authorize others to use, reproduce and edit
                any of your Comments in any and all forms, formats or media.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">Hyperlinking to our Content</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                The following organizations may link to our Website without
                prior written approval:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses; and
                </li>
                <li>
                  System wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Web site.
                </li>
              </ul>
              <p>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party&apos;s site.
              </p>
              <p>
                We may consider and approve other link requests from the
                following types of organizations:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  commonly-known consumer and/or business information sources;
                </li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
              </ul>
              <p>
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of Ldvloper; and (d) the link is in the context of general
                resource information.
              </p>
              <p>
                These organizations may link to our home page so long as the
                link: (a) is not in any way deceptive; (b) does not falsely
                imply sponsorship, endorsement or approval of the linking party
                and its products or services; and (c) fits within the context of
                the linking party&apos;s site.
              </p>
              <p>
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to Ldvloper. Please include your name, your
                organization name, contact information as well as the URL of
                your site, a list of any URLs from which you intend to link to
                our Website, and a list of the URLs on our site to which you
                would like to link. Wait 2-3 weeks for a response.
              </p>
              <p>
                Approved organizations may hyperlink to our Website as follows:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>By use of our corporate name; or</li>
                <li>
                  By use of the uniform resource locator being linked to; or
                </li>
                <li>
                  By use of any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party&apos;s site.
                </li>
              </ul>
              <p>
                No use of Ldvloper&apos;s logo or other artwork will be allowed
                for linking absent a trademark license agreement.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">iFrames</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                Without prior approval and written permission, you may not
                create frames around our Webpages that alter in any way the
                visual presentation or appearance of our Website.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">Content Liability</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                We shall not be held responsible for any content that appears on
                your Website. You agree to protect and defend us against all
                claims that are rising on your Website. No link(s) should appear
                on any Website that may be interpreted as libelous, obscene or
                criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third-party rights.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">Reservation of Rights</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amend these terms and conditions and it&apos;s
                linking policy at any time. By continuously linking to our
                Website, you agree to be bound to and follow these linking terms
                and conditions.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">
              Removal of links from our website
            </h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us at any moment. We
                will consider requests to remove links but we are not obligated
                to do so or to respond to you directly.
              </p>
              <p>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="space-y-4">
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-gray-100 dark:bg-inherit px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-90">
            <h2 className="text-lg font-medium">Disclaimer</h2>
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-3">
            <div className="space-y-2">
              <p>
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  limit or exclude our or your liability for death or personal
                  injury;
                </li>
                <li>
                  limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation;
                </li>
                <li>
                  limit any of our or your liabilities in any way that is not
                  permitted under applicable law; or
                </li>
                <li>
                  exclude any of our or your liabilities that may not be
                  excluded under applicable law.
                </li>
              </ul>
              <p>
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </p>
              <p>
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </main>
  );
};
