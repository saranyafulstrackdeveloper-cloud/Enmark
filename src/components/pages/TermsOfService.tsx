import { FileText, AlertCircle, Scale, Shield, UserCheck, Ban } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-white">
            Last updated: January 21, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to PowerTech Solutions. These Terms of Service ("Terms") govern your access to 
              and use of our website, products, and services. By accessing or using our services, you 
              agree to be bound by these Terms. If you do not agree to these Terms, please do not use 
              our services.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <UserCheck className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed space-y-4">
              <p>
                By using PowerTech Solutions' services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all 
                visitors, users, and others who access or use our services.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any 
                material changes via email or through our website. Your continued use of our services 
                after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed space-y-4">
              <p>
                PowerTech Solutions provides electrical engineering, installation, maintenance, and 
                consulting services. We reserve the right to modify, suspend, or discontinue any aspect 
                of our services at any time without prior notice.
              </p>
              <p>The following terms apply to all our services:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>All work is performed in accordance with local electrical codes and regulations</li>
                <li>Services are subject to availability and scheduling</li>
                <li>Prices and specifications are subject to change without notice</li>
                <li>Custom solutions require separate agreements and terms</li>
                <li>Emergency services are available 24/7 at premium rates</li>
              </ul>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">User Responsibilities</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed">
              <p className="mb-4">When using our services, you agree to:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Respect intellectual property rights</li>
                <li>Provide safe and adequate access to work locations</li>
              </ul>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Scale className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed space-y-4">
              <p>
                All prices are quoted in US Dollars unless otherwise specified. Payment terms are as follows:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Deposits may be required for large projects</li>
                <li>Payment is due upon completion unless other arrangements are made</li>
                <li>Late payments may incur additional fees</li>
                <li>We accept various payment methods including credit cards, checks, and wire transfers</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All fees are non-negotiable once work has commenced</li>
              </ul>
            </div>
          </div>

          {/* Warranties and Guarantees */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Warranties and Guarantees</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed space-y-4">
              <p>
                We stand behind our work and materials with comprehensive warranties:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Workmanship warranty: 1 year from completion date</li>
                <li>Product warranties: As specified by manufacturers</li>
                <li>Extended warranties available for purchase</li>
                <li>Warranty claims must be submitted in writing</li>
                <li>Warranties do not cover damage from misuse or unauthorized modifications</li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Ban className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed space-y-4">
              <p>
                To the maximum extent permitted by law, PowerTech Solutions shall not be liable for:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from third-party products or services</li>
                <li>Acts of God, natural disasters, or force majeure events</li>
                <li>Damages exceeding the amount paid for the specific service</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                All content on our website, including but not limited to text, graphics, logos, images, 
                and software, is the property of PowerTech Solutions and protected by copyright, trademark, 
                and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from our content 
                without our express written permission.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless PowerTech Solutions, its officers, 
              directors, employees, and agents from any claims, damages, losses, liabilities, and 
              expenses arising from your use of our services or violation of these Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the state 
                where our headquarters is located, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or our services shall be resolved through binding 
                arbitration, except where prohibited by law. You waive your right to a jury trial and 
                class action lawsuits.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend access to our services immediately, without 
              prior notice, for any reason, including but not limited to breach of these Terms. Upon 
              termination, your right to use our services will immediately cease.
            </p>
          </div>

          {/* Severability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-600 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
              shall remain in full force and effect.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: legal@powertech.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Power Street, Electric City, EC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
