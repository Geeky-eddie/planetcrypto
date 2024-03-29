import React from 'react';
import Adsfooter from '../components/Adsfooter';
import Nativead from '../components/Nativead';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container max-w-2xl mx-auto px-4 py-8">
        <Nativead />
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">These terms and conditions ("Terms", "Agreement") are an agreement between planetcrypto.com.ng ("us", "we", or "our") and you ("User", "you", or "your"). This Agreement sets forth the general terms and conditions of your use of the planetcrypto.com.ng website and any of its products or services (collectively, "Website" or "Services").</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Accounts and Membership</h2>
      <p className="mb-4">If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Termination</h2>
      <p className="mb-4">We may terminate or suspend your account and bar access to the Website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4">The Website and its original content, features, and functionality are owned by planetcrypto.com.ng and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Agreement</h2>
      <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms of Service by posting the updated terms on the Website. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms of Service.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
      <ul className="list-disc list-inside mb-4">
        <li>By email: eddie@geekyeddietech.com</li>
      </ul>
      <Adsfooter />
    </div>
  );
}

export default TermsAndConditions;
