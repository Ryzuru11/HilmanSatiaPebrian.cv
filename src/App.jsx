import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Code, 
  Palette, 
  Globe,
  Download,
  Github,
  Linkedin,
  ChevronDown,
  Star,
  Award,
  Database,
  Monitor,
  Zap,
  Target,
  BookOpen,
  Calendar
} from 'lucide-react'
import './App.css'
import myPhoto from './assets/foto.jpg';
import cvPdf from './assets/Hilman Satia Pebrian_CV_.pdf'; // Ganti dengan nama file PDF Anda

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const skills = [
    { name: 'Web Development', level: 90, icon: Globe, description: 'HTML, CSS, Bootstrap, JavaScript' },
    { name: 'UI/UX Design', level: 85, icon: Palette, description: 'Responsive & User-friendly Design' },
    { name: 'Programming', level: 80, icon: Code, description: 'C, Python, JavaScript' },
    { name: 'Database Management', level: 75, icon: Database, description: 'MySQL, Data Analysis' },
    { name: 'System Administration', level: 70, icon: Monitor, description: 'CyberPanel, SSH, VirtualBox' },
    { name: 'Digital Marketing', level: 75, icon: Target, description: 'Google Analytics, Social Media' }
  ]

  const experiences = [
    {
      title: 'Web Developer',
      company: 'RUKI.ID Architecture',
      period: 'Current',
      type: 'Freelance',
      description: [
        'Merancang dan mengembangkan website RUKI.ID Architecture menggunakan HTML, CSS, dan teknologi pendukung lainnya',
        'Membuat desain UI/UX yang responsif dan user-friendly',
        'Mengimplementasikan fitur navigasi, animasi, dan tampilan gambar interaktif',
        'Bertanggung jawab atas optimasi performa dan debugging website'
      ]
    },
    {
      title: 'Magang - Network Technician',
      company: 'PUSAT TEKNOLOGI INFORMASI DAN KOMUNIKASI UNIVERSITAS MATARAM',
      period: 'Oktober 2022 - Desember 2022',
      type: 'Internship',
      description: [
        'Melakukan pengecekan rutin di setiap Gedung kampus kendala sambungan jaringan internet serta perkabelan'
      ]
    },
    {
      title: 'Magang - IT Support',
      company: 'LAPTOP STORE MATARAM',
      period: 'January 2022 - Juni 2022',
      type: 'Internship',
      description: [
        'Menginstall ulang laptop secara keseluruhan',
        'Membantu permasalahan kendala customer',
        'Menyusun laporan keuangan toko'
      ]
    }
  ]

  const organizations = [
    {
      title: 'Anggota Komunikasi dan Informasi',
      organization: 'BEM-UNIS Badan Eksekutif Mahasiswa UNISA Yogyakarta',
      period: '2022 - 2025',
      description: [
        'Membuat dan mengedit materi konten digital (poster, feed Instagram, video pendek)',
        'Membantu publikasi acara (seminar, workshop, lomba, dll)',
        'Kelola sosial media BEM',
        'Mendokumentasi kegiatan',
        'Membantu desain dan caption untuk publikasi media sosial'
      ]
    },
    {
      title: 'LO (Liaison Officer)',
      organization: 'Panitia MATAF UNISA Yogyakarta',
      period: '2024',
      description: [
        'Mengatur jalannya acara orientasi mahasiswa baru',
        'Membantu koordinasi peserta & narasumber',
        'Mengurus perlengkapan, dokumentasi, atau publikasi',
        'Menjadi LO untuk mendampingi mahasiswa baru'
      ]
    },
    {
      title: 'Anggota',
      organization: 'Remaja Masjid Al-Maqbul Desa Nyurlembang',
      period: '2016 - 2023',
      description: [
        'Mengkoordinir kegiatan keagamaan',
        'Menjadi panitia acara',
        'Membantu mempublikasi acara'
      ]
    },
    {
      title: 'Anggota OSIS',
      organization: 'SMK Negeri 1 Lingsar',
      period: '2020 - 2022',
      description: [
        'Membantu pelaksanaan kegiatan sekolah (class meeting, lomba, upacara, acara hari besar)',
        'Mendukung koordinasi antara siswa dan guru',
        'Mengatur administrasi kepanitiaan OSIS',
        'Membantu publikasi & dokumentasi kegiatan sekolah'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white"
            >
              HSP
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400' : 'text-white/70'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img src={myPhoto} alt="Hilman Satia Pebrian" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Hilman Satia
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Pebrian
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-2"
          >
            Web Developer & UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-white/60 mb-8"
          >
            Teknologi Informasi - Universitas Aisyiyah Yogyakarta
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
                        <a
              href={cvPdf}
              download="HilmanSatiaPebrian_CV.pdf" // Nama file saat diunduh
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg border"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown className="w-8 h-8 text-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-white/80">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>Lombok Barat, Nusa Tenggara Barat (NTB)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>hilmansatiapebrian@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+62 852 376 489 41</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    <span>Teknologi Informasi - UNISA Yogyakarta (Semester 4)</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Lulusan SMK Negeri 1 Lingsar jurusan Rekayasa Perangkat Lunak, saat ini sedang menempuh 
                pendidikan di Universitas Aisyiyah Yogyakarta. Memiliki pengalaman di bidang desain grafis, 
                desain web, dan pengembangan website. Mudah beradaptasi, mampu bekerja sama dalam tim, serta 
                memiliki ketertarikan untuk berkontribusi di bidang desain dan pemrograman.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Web Development</Badge>
                <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">UI/UX Design</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Full Stack Development</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Machine Learning</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Digital Forensics</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-white text-xl mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-purple-300 text-lg font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex gap-2 mt-2 md:mt-0">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                            {exp.period}
                          </Badge>
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-white/80 flex items-start">
                            <Star className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Organization Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Organization Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center text-lg">
                        <Users className="w-5 h-5 text-purple-400 mr-3" />
                        {org.title}
                      </CardTitle>
                      <CardDescription className="text-purple-300 font-medium">
                        {org.organization}
                      </CardDescription>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30 w-fit">
                        {org.period}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {org.description.map((desc, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <skill.icon className="w-8 h-8 text-purple-400 mr-3" />
                      <div>
                        <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
                        <p className="text-white/60 text-sm">{skill.description}</p>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full"
                      />
                    </div>
                    <p className="text-white/60 text-sm">{skill.level}%</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <CardTitle className="text-white text-2xl">Universitas Aisyiyah Yogyakarta (UNISA)</CardTitle>
                    <CardDescription className="text-purple-300 text-lg">
                      Program Studi Teknologi Informasi - Semester 4
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
                    Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Programming (C, Python, HTML, CSS)</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">UI/UX Design</Badge>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Full Stack Development</Badge>
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Digital Forensics</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Machine Learning</Badge>
                  </div>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="w-5 h-5 text-purple-400 mr-2" />
                    Thesis Project (Planned)
                  </h4>
                  <p className="text-white/80 italic">
                    "Pengembangan Website Desa Nyurlembaibang untuk Layanan Pengaduan, Pendataan Masyarakat, dan Informasi Publik"
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Interested in working together? Let's connect and discuss how we can create something amazing!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Email</p>
                          <p className="text-white/70">hilmansatiapebrian@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Phone</p>
                          <p className="text-white/70">+62 852 376 489 41</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">Location</p>
                          <p className="text-white/70">Lombok Barat, NTB, Indonesia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                    <p className="text-white/80">
                      I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
                    </p>
                    <div className="flex space-x-4">
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </Button>
                      <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 Hilman Satia Pebrian. Made with ❤️ and React.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

