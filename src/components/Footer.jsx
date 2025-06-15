import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-6 py-12 lg:py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 - Event & Bootcamp */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Event & Bootcamp
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Mobile Development
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  UI Design
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  UI Research
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Presentation
                </a>
              </div>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Communication
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Video Production
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Digital Marketing
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Branding
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - About Owlearn */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              About Owlearn
            </h3>
            <div className="space-y-4">
              <a
                href="#"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Admission Info
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Article
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Group & Referral Program
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:support@edtech.com"
                className="block text-blue-500 hover:text-blue-700 transition-colors"
              >
                support@nexonite.com
              </a>
              <a
                href="tel:+6285923935983"
                className="block text-gray-600 hover:text-purple-600 transition-colors"
              >
                (+62) 85923935983
              </a>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2023 NexoNite. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
