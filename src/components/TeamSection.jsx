import { Linkedin, Twitter, Github } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Mahar Bensyafri Taher",
      position: "CEO & Founder",
      avatar: "MBT",
      avatarBg: "from-blue-500 to-purple-500",
      description: "Visioner dengan pengalaman 8+ tahun di industri teknologi",
    },
    {
      id: 2,
      name: "Agus Sutiyanto",
      position: "CTO",
      avatar: "AS",
      avatarBg: "from-pink-500 to-red-500",
      description: "Expert dalam pengembangan aplikasi web modern dan scalable",
    },
    {
      id: 3,
      name: "Raihan Muhammad Rif'at",
      position: "Project Manager",
      avatar: "RMR",
      avatarBg: "from-green-500 to-emerald-500",
      description: "Spesialis UI/UX dengan portofolio desain yang menawan",
    },
    {
      id: 4,
      name: "Maya Putri",
      position: "Lead Designer",
      avatar: "MP",
      avatarBg: "from-orange-500 to-yellow-500",
      description: "Ahli dalam mengelola proyek dengan metodologi Agile",
    },
    {
      id: 5,
      name: "Doni Pratama",
      position: "Senior Developer",
      avatar: "DP",
      avatarBg: "from-cyan-500 to-blue-500",
      description: "Full-stack developer dengan keahlian di berbagai teknologi",
    },
    {
      id: 6,
      name: "Lisa Anggraini",
      position: "Marketing Lead",
      avatar: "LA",
      avatarBg: "from-purple-500 to-pink-500",
      description: "Strategis pemasaran digital dengan track record yang solid",
    },
  ];

  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Tim Kami
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bertemu dengan Tim Ahli Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tim profesional berpengalaman yang siap mewujudkan visi digital Anda
            dengan dedikasi dan keahlian terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${member.avatarBg} flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {member.avatar}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
