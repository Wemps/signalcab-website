import { motion } from "motion/react";
import { Footer } from "./Footer";

const sectionHeading = "text-[#f3f4f6] pt-6 font-semibold text-[18px]";
const subHeading = "text-[#f3f4f6] pt-4 font-semibold text-[16px]";
const link = "text-[#00ffaa] hover:underline";

export function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="absolute top-[30%] right-[25%] w-[400px] h-[400px] bg-[#00ffaa]/5 rounded-full blur-[150px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#00ffaa] mb-3"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Legal
            </p>
            <h1
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Privacy Policy
            </h1>

            <div
              className="space-y-4 text-[#9ca3af]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.8 }}
            >
              <p className="text-[#6b7280]" style={{ fontSize: 13 }}>
                Last updated: March 05, 2026
              </p>

              <p>
                This Privacy Notice for Cascade Made, LLC ("we," "us," or "our"), describes how and why
                we might access, collect, store, use, and/or share ("process") your personal information
                when you use our services ("Services"), including when you:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Visit our website at signalcab.com, or any website of ours that links to this Privacy Notice</li>
                <li>Download and use our mobile application (SignalCab), or any other application of ours that links to this Privacy Notice</li>
                <li>Engage with us in other related ways, including any marketing or events</li>
              </ul>

              <p>
                <strong className="text-[#d1d5db]">Questions or concerns?</strong> Reading this Privacy Notice will help you
                understand your privacy rights and choices. We are responsible for making decisions about
                how your personal information is processed. If you do not agree with our policies and
                practices, please do not use our Services. If you still have any questions or concerns,
                please contact us at{" "}
                <a href="mailto:yo@signalcab.com" className={link}>yo@signalcab.com</a>.
              </p>

              {/* Summary of Key Points */}
              <h2 className={sectionHeading} style={{ fontSize: 20 }}>Summary of Key Points</h2>

              <p className="italic">
                This summary provides key points from our Privacy Notice, but you can find out more
                details about any of these topics by reading the full notice below.
              </p>

              <p>
                <strong className="text-[#d1d5db]">What personal information do we process?</strong> When you visit, use, or
                navigate our Services, we may process personal information depending on how you interact
                with us and the Services, the choices you make, and the products and features you use.
              </p>
              <p>
                <strong className="text-[#d1d5db]">Do we process any sensitive personal information?</strong> We do not process
                sensitive personal information.
              </p>
              <p>
                <strong className="text-[#d1d5db]">Do we collect any information from third parties?</strong> We do not collect
                any information from third parties.
              </p>
              <p>
                <strong className="text-[#d1d5db]">How do we process your information?</strong> We process your information to
                provide, improve, and administer our Services, communicate with you, for security and
                fraud prevention, and to comply with law. We may also process your information for other
                purposes with your consent. We process your information only when we have a valid legal
                reason to do so.
              </p>
              <p>
                <strong className="text-[#d1d5db]">In what situations and with which parties do we share personal information?</strong> We
                may share information in specific situations and with specific third parties.
              </p>
              <p>
                <strong className="text-[#d1d5db]">How do we keep your information safe?</strong> We have adequate organizational
                and technical processes and procedures in place to protect your personal information.
                However, no electronic transmission over the internet or information storage technology
                can be guaranteed to be 100% secure.
              </p>
              <p>
                <strong className="text-[#d1d5db]">What are your rights?</strong> Depending on where you are located
                geographically, the applicable privacy law may mean you have certain rights regarding
                your personal information.
              </p>
              <p>
                <strong className="text-[#d1d5db]">How do you exercise your rights?</strong> The easiest way to exercise your
                rights is by contacting us. We will consider and act upon any request in accordance
                with applicable data protection laws.
              </p>

              {/* Table of Contents */}
              <h2 className={sectionHeading} style={{ fontSize: 20 }}>Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-1">
                <li><a href="#infocollect" className={link}>What Information Do We Collect?</a></li>
                <li><a href="#infouse" className={link}>How Do We Process Your Information?</a></li>
                <li><a href="#legalbases" className={link}>What Legal Bases Do We Rely On to Process Your Personal Information?</a></li>
                <li><a href="#whoshare" className={link}>When and With Whom Do We Share Your Personal Information?</a></li>
                <li><a href="#cookies" className={link}>Do We Use Cookies and Other Tracking Technologies?</a></li>
                <li><a href="#inforetain" className={link}>How Long Do We Keep Your Information?</a></li>
                <li><a href="#infosafe" className={link}>How Do We Keep Your Information Safe?</a></li>
                <li><a href="#infominors" className={link}>Do We Collect Information From Minors?</a></li>
                <li><a href="#privacyrights" className={link}>What Are Your Privacy Rights?</a></li>
                <li><a href="#dnt" className={link}>Controls for Do-Not-Track Features</a></li>
                <li><a href="#uslaws" className={link}>Do United States Residents Have Specific Privacy Rights?</a></li>
                <li><a href="#policyupdates" className={link}>Do We Make Updates to This Notice?</a></li>
                <li><a href="#contact" className={link}>How Can You Contact Us About This Notice?</a></li>
                <li><a href="#request" className={link}>How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
              </ol>

              {/* Section 1 */}
              <h2 id="infocollect" className={sectionHeading}>1. What Information Do We Collect?</h2>
              <h3 className={subHeading}>Personal information you disclose to us</h3>
              <p><em><strong className="text-[#d1d5db]">In Short:</strong> We collect personal information that you provide to us.</em></p>
              <p>
                We collect personal information that you voluntarily provide to us when you express an
                interest in obtaining information about us or our products and Services, when you
                participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p><strong className="text-[#d1d5db]">Sensitive Information.</strong> We do not process sensitive information.</p>
              <p>
                <strong className="text-[#d1d5db]">Application Data.</strong> If you use our application(s), we also may collect
                the following information if you choose to provide us with access or permission:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <em>Mobile Device Access.</em> We may request access or permission to certain features
                  from your mobile device, including your mobile device's bluetooth, microphone,
                  reminders, sensors, and other features. If you wish to change our access or
                  permissions, you may do so in your device's settings.
                </li>
                <li>
                  <em>Mobile Device Data.</em> We automatically collect device information (such as your
                  mobile device ID, model, and manufacturer), operating system, version information and
                  system configuration information, device and application identification numbers,
                  browser type and version, hardware model, Internet service provider and/or mobile
                  carrier, and Internet Protocol (IP) address (or proxy server).
                </li>
                <li>
                  <em>Push Notifications.</em> We may request to send you push notifications regarding
                  your account or certain features of the application(s). If you wish to opt out from
                  receiving these types of communications, you may turn them off in your device's settings.
                </li>
              </ul>
              <p>
                This information is primarily needed to maintain the security and operation of our
                application(s), for troubleshooting, and for our internal analytics and reporting purposes.
              </p>
              <p>
                All personal information that you provide to us must be true, complete, and accurate,
                and you must notify us of any changes to such personal information.
              </p>

              <h3 className={subHeading}>Information automatically collected</h3>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> Some information — such as your Internet Protocol (IP) address
                and/or browser and device characteristics — is collected automatically when you visit our Services.</em>
              </p>
              <p>
                We automatically collect certain information when you visit, use, or navigate the
                Services. This information does not reveal your specific identity (like your name or
                contact information) but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system, language preferences,
                referring URLs, device name, country, location, information about how and when you use
                our Services, and other technical information.
              </p>
              <p>The information we collect includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage,
                  and performance information our servers automatically collect when you access or use
                  our Services and which we record in log files.
                </li>
                <li>
                  <em>Device Data.</em> We collect device data such as information about your computer,
                  phone, tablet, or other device you use to access the Services.
                </li>
              </ul>

              {/* Section 2 */}
              <h2 id="infouse" className={sectionHeading}>2. How Do We Process Your Information?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud prevention, and to comply
                with law. We may also process your information for other purposes only with your prior
                explicit consent.</em>
              </p>
              <p>
                We process your personal information for a variety of reasons, depending on how you
                interact with our Services, including to save or protect an individual's vital interest,
                such as to prevent harm.
              </p>

              {/* Section 3 */}
              <h2 id="legalbases" className={sectionHeading}>3. What Legal Bases Do We Rely On to Process Your Personal Information?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> We only process your personal information when we believe
                it is necessary and we have a valid legal reason (i.e., legal basis) to do so under
                applicable law, like with your consent, to comply with laws, to provide you with
                services to enter into or fulfill our contractual obligations, to protect your rights,
                or to fulfill our legitimate business interests.</em>
              </p>
              <p><em><u>If you are located in the EU or UK, this section applies to you.</u></em></p>
              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the
                valid legal bases we rely on in order to process your personal information. As such,
                we may rely on the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[#d1d5db]">Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
                <li><strong className="text-[#d1d5db]">Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
                <li><strong className="text-[#d1d5db]">Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
              </ul>
              <p><em><u>If you are located in Canada, this section applies to you.</u></em></p>
              <p>
                We may process your information if you have given us specific permission (i.e., express
                consent) to use your personal information for a specific purpose, or in situations
                where your permission can be inferred (i.e., implied consent). You can withdraw your
                consent at any time.
              </p>

              {/* Section 4 */}
              <h2 id="whoshare" className={sectionHeading}>4. When and With Whom Do We Share Your Personal Information?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> We may share information in specific situations described
                in this section and/or with the following third parties.</em>
              </p>
              <p>We may need to share your personal information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#d1d5db]">Business Transfers.</strong> We may share or transfer your information in
                  connection with, or during negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business to another company.
                </li>
              </ul>

              {/* Section 5 */}
              <h2 id="cookies" className={sectionHeading}>5. Do We Use Cookies and Other Tracking Technologies?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> We may use cookies and other tracking technologies to
                collect and store your information.</em>
              </p>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to
                gather information when you interact with our Services. Some online tracking
                technologies help us maintain the security of our Services, prevent crashes, fix bugs,
                save your preferences, and assist with basic site functions.
              </p>
              <p>
                We also permit third parties and service providers to use online tracking technologies
                on our Services for analytics and advertising, including to help manage and display
                advertisements, to tailor advertisements to your interests, or to send abandoned
                shopping cart reminders (depending on your communication preferences).
              </p>
              <h3 className={subHeading}>Google Analytics</h3>
              <p>
                We may share your information with Google Analytics to track and analyze the use of
                the Services. To opt out of being tracked by Google Analytics across the Services,
                visit{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={link}>
                  https://tools.google.com/dlpage/gaoptout
                </a>
                . For more information on the privacy practices of Google, please visit the{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={link}>
                  Google Privacy &amp; Terms page
                </a>.
              </p>

              {/* Section 6 */}
              <h2 id="inforetain" className={sectionHeading}>6. How Long Do We Keep Your Information?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> We keep your information for as long as necessary to
                fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
              </p>
              <p>
                We will only keep your personal information for as long as it is necessary for the
                purposes set out in this Privacy Notice, unless a longer retention period is required
                or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
              <p>
                When we have no ongoing legitimate business need to process your personal information,
                we will either delete or anonymize such information, or, if this is not possible, then
                we will securely store your personal information and isolate it from any further
                processing until deletion is possible.
              </p>

              {/* Section 7 */}
              <h2 id="infosafe" className={sectionHeading}>7. How Do We Keep Your Information Safe?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> We aim to protect your personal information through
                a system of organizational and technical security measures.</em>
              </p>
              <p>
                We have implemented appropriate and reasonable technical and organizational security
                measures designed to protect the security of any personal information we process.
                However, despite our safeguards and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology can be guaranteed
                to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our security and improperly
                collect, access, steal, or modify your information. Although we will do our best to
                protect your personal information, transmission of personal information to and from
                our Services is at your own risk. You should only access the Services within a secure
                environment.
              </p>

              {/* Section 8 */}
              <h2 id="infominors" className={sectionHeading}>8. Do We Collect Information From Minors?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> We do not knowingly collect data from or market to
                children under 18 years of age.</em>
              </p>
              <p>
                We do not knowingly collect, solicit data from, or market to children under 18 years
                of age, nor do we knowingly sell such personal information. By using the Services, you
                represent that you are at least 18 or that you are the parent or guardian of such a
                minor and consent to such minor dependent's use of the Services. If we learn that
                personal information from users less than 18 years of age has been collected, we will
                deactivate the account and take reasonable measures to promptly delete such data from
                our records. If you become aware of any data we may have collected from children
                under age 18, please contact us at{" "}
                <a href="mailto:yo@signalcab.com" className={link}>yo@signalcab.com</a>.
              </p>

              {/* Section 9 */}
              <h2 id="privacyrights" className={sectionHeading}>9. What Are Your Privacy Rights?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> Depending on your state of residence in the US or in
                some regions, such as the European Economic Area (EEA), United Kingdom (UK),
                Switzerland, and Canada, you have rights that allow you greater access to and control
                over your personal information. You may review, change, or terminate your account at
                any time, depending on your country, province, or state of residence.</em>
              </p>
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights
                under applicable data protection laws. These may include the right (i) to request
                access and obtain a copy of your personal information, (ii) to request rectification
                or erasure; (iii) to restrict the processing of your personal information; (iv) if
                applicable, to data portability; and (v) not to be subject to automated
                decision-making. You can make such a request by contacting us using the contact
                details provided below.
              </p>
              <p>
                We will consider and act upon any request in accordance with applicable data
                protection laws.
              </p>
              <p>
                <strong className="text-[#d1d5db]"><u>Withdrawing your consent:</u></strong> If we are relying on your consent to
                process your personal information, you have the right to withdraw your consent at any
                time. You can withdraw your consent at any time by contacting us using the contact
                details provided below.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you may email us at{" "}
                <a href="mailto:yo@signalcab.com" className={link}>yo@signalcab.com</a>.
              </p>

              {/* Section 10 */}
              <h2 id="dnt" className={sectionHeading}>10. Controls for Do-Not-Track Features</h2>
              <p>
                Most web browsers and some mobile operating systems and mobile applications include a
                Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy
                preference not to have data about your online browsing activities monitored and
                collected. At this stage, no uniform technology standard for recognizing and
                implementing DNT signals has been finalized. As such, we do not currently respond to
                DNT browser signals or any other mechanism that automatically communicates your choice
                not to be tracked online.
              </p>
              <p>
                California law requires us to let you know how we respond to web browser DNT signals.
                Because there currently is not an industry or legal standard for recognizing or
                honoring DNT signals, we do not respond to them at this time.
              </p>

              {/* Section 11 */}
              <h2 id="uslaws" className={sectionHeading}>11. Do United States Residents Have Specific Privacy Rights?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> If you are a resident of California, Colorado,
                Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana,
                Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or
                Virginia, you may have the right to request access to and receive details about the
                personal information we maintain about you and how we have processed it, correct
                inaccuracies, get a copy of, or delete your personal information. You may also have
                the right to withdraw your consent to our processing of your personal information.</em>
              </p>
              <p>
                We have not disclosed, sold, or shared any personal information to third parties for
                a business or commercial purpose in the preceding twelve (12) months. We will not sell
                or share personal information in the future belonging to website visitors, users, and
                other consumers.
              </p>

              <h3 className={subHeading}>Your Rights</h3>
              <p>
                You have rights under certain US state data protection laws. However, these rights
                are not absolute, and in certain cases, we may decline your request as permitted by
                law. These rights include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[#d1d5db]">Right to know</strong> whether or not we are processing your personal data</li>
                <li><strong className="text-[#d1d5db]">Right to access</strong> your personal data</li>
                <li><strong className="text-[#d1d5db]">Right to correct</strong> inaccuracies in your personal data</li>
                <li><strong className="text-[#d1d5db]">Right to request</strong> the deletion of your personal data</li>
                <li><strong className="text-[#d1d5db]">Right to obtain a copy</strong> of the personal data you previously shared with us</li>
                <li><strong className="text-[#d1d5db]">Right to non-discrimination</strong> for exercising your rights</li>
                <li><strong className="text-[#d1d5db]">Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</li>
              </ul>

              <h3 className={subHeading}>How to Exercise Your Rights</h3>
              <p>
                To exercise these rights, you can contact us by emailing us at{" "}
                <a href="mailto:yo@signalcab.com" className={link}>yo@signalcab.com</a>, or by
                referring to the contact details at the bottom of this document.
              </p>

              <h3 className={subHeading}>Appeals</h3>
              <p>
                Under certain US state data protection laws, if we decline to take action regarding
                your request, you may appeal our decision by emailing us at{" "}
                <a href="mailto:yo@signalcab.com" className={link}>yo@signalcab.com</a>. We will
                inform you in writing of any action taken or not taken in response to the appeal,
                including a written explanation of the reasons for the decisions. If your appeal is
                denied, you may submit a complaint to your state attorney general.
              </p>

              {/* Section 12 */}
              <h2 id="policyupdates" className={sectionHeading}>12. Do We Make Updates to This Notice?</h2>
              <p>
                <em><strong className="text-[#d1d5db]">In Short:</strong> Yes, we will update this notice as necessary to stay
                compliant with relevant laws.</em>
              </p>
              <p>
                We may update this Privacy Notice from time to time. The updated version will be
                indicated by an updated "Revised" date at the top of this Privacy Notice. If we make
                material changes to this Privacy Notice, we may notify you either by prominently
                posting a notice of such changes or by directly sending you a notification. We
                encourage you to review this Privacy Notice frequently to be informed of how we are
                protecting your information.
              </p>

              {/* Section 13 */}
              <h2 id="contact" className={sectionHeading}>13. How Can You Contact Us About This Notice?</h2>
              <p>
                If you have questions or comments about this notice, you may email us at{" "}
                <a href="mailto:yo@signalcab.com" className={link}>yo@signalcab.com</a> or contact
                us by post at:
              </p>
              <p>Cascade Made, LLC</p>

              {/* Section 14 */}
              <h2 id="request" className={sectionHeading}>14. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
              <p>
                Based on the applicable laws of your country or state of residence in the US, you may
                have the right to request access to the personal information we collect from you,
                details about how we have processed it, correct inaccuracies, or delete your personal
                information. You may also have the right to withdraw your consent to our processing
                of your personal information. These rights may be limited in some circumstances by
                applicable law. To request to review, update, or delete your personal information,
                please contact us at{" "}
                <a href="mailto:yo@signalcab.com" className={link}>yo@signalcab.com</a>.
              </p>

              <p className="text-[#4b5563] pt-6 border-t border-[#1f2937]" style={{ fontSize: 13 }}>
                &copy; 2026 Cascade Made, LLC. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
