import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
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
              PowerTech Solutions ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services. Please read this policy carefully.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600 ml-6 list-disc">
                  <li>Register for an account</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device, 
                  including information about your web browser, IP address, time zone, and cookies installed 
                  on your device.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            
            <div className="ml-16 space-y-3 text-gray-600">
              <p>We use the information we collect to:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Process your transactions and manage your orders</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns and improve our website</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed">
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection practices</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <UserCheck className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed">
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information in the following circumstances:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Your Privacy Rights</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed">
              <p className="mb-4">You have the right to:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
            </div>
            
            <div className="ml-16 text-gray-600 leading-relaxed">
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and 
                store certain information. You can instruct your browser to refuse all cookies or to 
                indicate when a cookie is being sent. However, if you do not accept cookies, you may 
                not be able to use some portions of our website.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: privacy@powertech.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Power Street, Electric City, EC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
