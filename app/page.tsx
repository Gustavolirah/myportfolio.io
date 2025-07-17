import Image from "next/image"
import {
  Code,
  Bolt,
  Rocket,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  TrendingUp,
  Laptop,
  Users,
  Award,
  Globe,
  Clock,
  SatelliteDish,
  MapPin,
  Heart,
} from "lucide-react"
import { SpaceBackground } from "@/components/space-background"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <Header />

      <main className="relative z-10">
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center text-center relative overflow-hidden p-0 bg-gradient-to-b from-space-dark via-space-purple to-space-blue"
        >
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.1)_0%,transparent_50%)] z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,255,0.05)_100%),linear-gradient(to_right,transparent_50%,rgba(139,92,246,0.05)_100%)] bg-[size:2px_2px] opacity-20 z-0"></div>
          <div className="relative z-1 max-w-4xl p-8">
            <div className="mb-8 flex justify-center">
              <Code className="h-16 w-16 text-cyan-400" />
            </div>
            <p className="text-lg text-cyan-400 mb-4 flex items-center justify-center gap-2 animate-fade-in">
              <Bolt className="h-5 w-5" />
              Especialista em Soluções Digitais e Estratégias de Crescimento
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
              Gustavo Matias
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 flex items-center justify-center gap-2 animate-fade-in-up animation-delay-200">
              <Rocket className="h-8 w-8 text-purple-400" />
              Desenvolvedor Full Stack & Gestor de Tráfego
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Com uma sólida formação em Análise e Desenvolvimento de Sistemas, minha expertise abrange a criação de
              soluções full stack robustas e a execução de campanhas digitais de alta performance. Sou movido por
              resultados e pela capacidade de transformar dados em insights acionáveis, impulsionando o crescimento e a
              inovação.
            </p>
            <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animation-delay-400">
              <a
                href="https://github.com/Gustavolirah"
                target="_blank"
                aria-label="GitHub"
                className="flex items-center justify-center size-10 rounded-md border border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-space-dark hover:scale-110"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://br.linkedin.com/in/gustavo-matias-66a860278"
                target="_blank"
                aria-label="LinkedIn"
                className="flex items-center justify-center size-10 rounded-md border border-purple-400 text-purple-400 transition-all duration-300 hover:bg-purple-400 hover:text-space-dark hover:scale-110"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:liragustavo718@gmail.com"
                target="_blank"
                aria-label="Email"
                className="flex items-center justify-center size-10 rounded-md border border-blue-400 text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-space-dark hover:scale-110"
                rel="noreferrer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-500">
              <a
                href="#experience"
                className="btn px-8 py-3 rounded-md font-semibold inline-flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-cyan-500 hover:to-blue-500 hover:scale-105"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Explorar Experiência
              </a>
              <a
                href="#contact"
                className="btn px-8 py-3 rounded-md font-semibold inline-flex items-center justify-center transition-all duration-300 border border-purple-400 text-purple-400 bg-transparent hover:bg-purple-400 hover:text-space-dark hover:scale-105"
              >
                <Bolt className="mr-2 h-5 w-5" />
                Conectar
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-purple-400 transition-colors duration-300 hover:text-cyan-400"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </section>

        <section id="about" className="about-section bg-card-background border-t border-b border-purple-400/20">
          <div className="section-bg-elements">
            <span className="bg-emoji top-right">🌌</span>
            <span className="bg-emoji bottom-left">✨</span>
            <span className="bg-emoji top-left">🚀</span>
            <span className="bg-emoji bottom-right">🛰️</span>
          </div>
          <div className="container">
            <div className="section-header">
              <div className="section-icon">🚀</div>
              <h2>Sobre Mim</h2>
              <div className="section-divider"></div>
            </div>
            <div className="grid gap-12 items-center lg:grid-cols-2">
              <div className="relative inline-block mb-8 text-center">
                <Image
                  src="/public/gustavo-graduation.jpeg"
                  alt="Gustavo Matias - Graduation Photo"
                  width={256}
                  height={256}
                  className="size-64 rounded-full object-cover border-4 border-cyan-400 mx-auto relative z-10 bg-gradient-to-br from-purple-400/20 to-cyan-400/20"
                />
                <div className="absolute -bottom-4 -right-4 size-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-2xl animate-spin-slow z-30">
                  ⚡
                </div>
              </div>
              <div className="text-gray-300 text-center lg:text-left">
                <p className="text-lg leading-relaxed mb-4">
                  Sou um <strong className="text-cyan-400">explorador digital</strong> com formação em
                  <strong className="text-purple-400">Análise e Desenvolvimento de Sistemas</strong> pela UNIP. Minha
                  missão é atuar nas fronteiras do desenvolvimento full stack e das campanhas digitais, buscando sempre
                  a inovação e a excelência.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Com experiência prática, já liderei projetos que resultaram na
                  <strong className="text-cyan-400">duplicação de conversões em 30 dias</strong> e desenvolvi sistemas
                  complexos que otimizam processos e conectam diferentes plataformas. Minha paixão é transformar dados
                  brutos em <strong className="text-purple-400">insights estratégicos e soluções eficientes</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Atualmente, estou aprofundando meus conhecimentos em bancos de dados com o curso
                  <strong className="text-blue-400">CS50&apos;s Introduction to Databases with SQL de Harvard</strong> e
                  aprimorando minhas habilidades de comunicação em inglês para expandir minha atuação globalmente.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="highlight-card bg-space-dark/50 border border-purple-400/20 rounded-lg p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:scale-105">
                <div className="highlight-icon mb-4 flex justify-center text-4xl">📈</div>
                <h3 className="text-lg font-semibold text-white mb-2">Gestor de Tráfego</h3>
                <p className="text-gray-400 text-sm">
                  Duplicação de conversões em 30 dias através de estratégias digitais
                </p>
              </div>
              <div className="highlight-card bg-space-dark/50 border border-purple-400/20 rounded-lg p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:scale-105">
                <div className="highlight-icon mb-4 flex justify-center text-4xl">💻</div>
                <h3 className="text-lg font-semibold text-white mb-2">Desenvolvedor Full Stack</h3>
                <p className="text-gray-400 text-sm">APIs robustas em C# que conectam sistemas como constelações</p>
              </div>
              <div className="highlight-card bg-space-dark/50 border border-purple-400/20 rounded-lg p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:scale-105">
                <div className="highlight-icon mb-4 flex justify-center text-4xl">📊</div>
                <h3 className="text-lg font-semibold text-white mb-2">Analista de Dados</h3>
                <p className="text-gray-400 text-sm">Dashboards que revelam insights como telescópios espaciais</p>
              </div>
              <div className="highlight-card bg-space-dark/50 border border-purple-400/20 rounded-lg p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:scale-105">
                <div className="highlight-icon mb-4 flex justify-center text-4xl">👥</div>
                <h3 className="text-lg font-semibold text-white mb-2">Líder de Projetos</h3>
                <p className="text-gray-400 text-sm">Metodologias ágeis para navegar projetos pelo cosmos</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section bg-background-color">
          <div className="section-bg-elements">
            <span className="bg-emoji top-right">⚙️</span>
            <span className="bg-emoji bottom-left">💡</span>
            <span className="bg-emoji top-left">💻</span>
            <span className="bg-emoji bottom-right">📊</span>
          </div>
          <div className="container">
            <div className="section-header">
              <div className="section-icon">🛠️</div>
              <h2>Habilidades</h2>
              <div className="section-divider"></div>
              <p className="section-description">Ferramentas e competências para conquistar qualquer desafio 🌌</p>
            </div>

            <div className="skills-tools-grid bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm mb-12 p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <TrendingUp className="h-6 w-6 text-cyan-400" /> Ferramentas e Tecnologias
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Laptop className="mb-2 h-6 w-6 text-cyan-400" />
                  <span className="text-gray-300 text-sm font-medium">React</span>
                  <span className="badge badge-purple">Frontend</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Code className="mb-2 h-6 w-6 text-blue-400" />
                  <span className="text-gray-300 text-sm font-medium">TypeScript</span>
                  <span className="badge badge-blue">Linguagem</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Cloud className="mb-2 h-6 w-6 text-blue-400" />
                  <span className="text-gray-300 text-sm font-medium">Azure</span>
                  <span className="badge badge-blue">Cloud</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Code className="mb-2 h-6 w-6 text-orange-400" /> {/* Using Code for HTML */}
                  <span className="text-gray-300 text-sm font-medium">HTML</span>
                  <span className="badge badge-orange">Frontend</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Code className="mb-2 h-6 w-6 text-blue-400" /> {/* Using Code for CSS */}
                  <span className="text-gray-300 text-sm font-medium">CSS</span>
                  <span className="badge badge-blue">Frontend</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Terminal className="mb-2 h-6 w-6 text-purple-400" />
                  <span className="text-gray-300 text-sm font-medium">C#</span>
                  <span className="badge badge-purple">Backend</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Code className="mb-2 h-6 w-6 text-yellow-400" /> {/* Using Code for JS */}
                  <span className="text-gray-300 text-sm font-medium">JavaScript</span>
                  <span className="badge badge-yellow">Linguagem</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Server className="mb-2 h-6 w-6 text-white" />
                  <span className="text-gray-300 text-sm font-medium">Next.js</span>
                  <span className="badge badge-white">Framework</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Code className="mb-2 h-6 w-6 text-teal-400" /> {/* Using Code for Tailwind */}
                  <span className="text-gray-300 text-sm font-medium">Tailwind CSS</span>
                  <span className="badge badge-teal">CSS Framework</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Database className="mb-2 h-6 w-6 text-red-400" />
                  <span className="text-gray-300 text-sm font-medium">SQL Server</span>
                  <span className="badge badge-red">Database</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <Database className="mb-2 h-6 w-6 text-orange-400" />
                  <span className="text-gray-300 text-sm font-medium">MySQL</span>
                  <span className="badge badge-orange">Database</span>
                </div>
                <div className="tool-item flex flex-col items-center text-center p-3 rounded-lg bg-space-dark/30 border border-gray-700 transition-all duration-300 hover:border-cyan-400">
                  <GitBranch className="mb-2 h-6 w-6 text-orange-600" />
                  <span className="text-gray-300 text-sm font-medium">Git</span>
                  <span className="badge badge-orange-dark">Version Control</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="skill-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6">
                <h3 className="text-xl text-white flex items-center gap-2 mb-4">
                  <Laptop className="text-2xl" /> Técnicas
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">C# / .NET</span>
                    <span className="skill-level text-cyan-400 font-semibold text-sm self-end">90%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">SQL Server</span>
                    <span className="skill-level text-purple-400 font-semibold text-sm self-end">85%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Python</span>
                    <span className="skill-level text-cyan-400 font-semibold text-sm self-end">80%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Power BI</span>
                    <span className="skill-level text-purple-400 font-semibold text-sm self-end">85%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">APIs REST</span>
                    <span className="skill-level text-cyan-400 font-semibold text-sm self-end">90%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Visual Studio</span>
                    <span className="skill-level text-purple-400 font-semibold text-sm self-end">85%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skill-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6">
                <h3 className="text-xl text-white flex items-center gap-2 mb-4">
                  <Rocket className="text-2xl" /> Marketing
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Meta Ads</span>
                    <span className="skill-level text-cyan-400 font-semibold text-sm self-end">95%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Google Ads</span>
                    <span className="skill-level text-purple-400 font-semibold text-sm self-end">85%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">CRM Management</span>
                    <span className="skill-level text-cyan-400 font-semibold text-sm self-end">90%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Data Analysis</span>
                    <span className="skill-level text-purple-400 font-semibold text-sm self-end">90%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Campaign Optimization</span>
                    <span className="skill-level text-cyan-400 font-semibold text-sm self-end">95%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="skill-item-progress flex flex-col gap-2">
                    <span className="skill-name text-gray-300 text-sm">Conversion Tracking</span>
                    <span className="skill-level text-purple-400 font-semibold text-sm self-end">85%</span>
                    <div className="progress-bar-container h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="skill-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6">
                <h3 className="text-xl text-white flex items-center gap-2 mb-4">
                  <Brain className="text-2xl" /> Competências
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-blue-light">Liderança de Projetos</span>
                  <span className="badge badge-blue-light">Metodologias Ágeis</span>
                  <span className="badge badge-blue-light">Comunicação Eficaz</span>
                  <span className="badge badge-blue-light">Trabalho em Equipe</span>
                  <span className="badge badge-blue-light">Pensamento Crítico</span>
                  <span className="badge badge-blue-light">Tomada de Decisão</span>
                  <span className="badge badge-blue-light">Gestão de Tempo</span>
                  <span className="badge badge-blue-light">Adaptação Rápida</span>
                  <span className="badge badge-blue-light">Planejamento Estratégico</span>
                  <span className="badge badge-blue-light">Criatividade</span>
                  <span className="badge badge-blue-light">Gestão de Orçamento</span>
                  <span className="badge badge-blue-light">Organização</span>
                </div>
              </div>

              <div className="skill-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6">
                <h3 className="text-xl text-white flex items-center gap-2 mb-4">
                  <Globe className="text-2xl" /> Idiomas
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="language-item flex justify-between items-center p-3 bg-space-dark/50 rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-400/50">
                    <span className="language-name text-gray-300 font-medium">Português</span>
                    <span className="badge badge-green">Nativo</span>
                  </div>
                  <div className="language-item flex justify-between items-center p-3 bg-space-dark/50 rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-400/50">
                    <span className="language-name text-gray-300 font-medium">Inglês</span>
                    <span className="badge badge-green">Intermediário</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section bg-card-background">
          <div className="section-bg-elements">
            <span className="bg-emoji top-left">🏢</span>
            <span className="bg-emoji top-right">💼</span>
            <span className="bg-emoji bottom-left">⚡</span>
            <span className="bg-emoji bottom-right">🌌</span>
          </div>
          <div className="container">
            <div className="section-header">
              <div className="section-icon">🚀</div>
              <h2>Experiência</h2>
              <div className="section-divider"></div>
              <p className="section-description">Jornada profissional através da tecnologia e marketing digital 🌌</p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="experience-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02]">
                <div className="experience-header flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 border-b border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="experience-icon p-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/20 text-3xl">
                      📈
                    </div>
                    <div className="flex-1">
                      <h3 className="experience-position text-xl text-white mb-2">Gestor de Tráfego</h3>
                      <p className="experience-company text-cyan-400 font-semibold mb-1">Hub Digital</p>
                      <p className="experience-type text-gray-400 text-sm">Agência de Marketing Digital</p>
                    </div>
                  </div>
                  <div className="experience-meta flex flex-col gap-2 text-gray-400 text-sm lg:items-end">
                    <span className="experience-period">
                      <Clock className="mr-1 h-4 w-4 inline" /> 02/12/2024 – 14/04/2025
                    </span>
                    <span className="experience-location">
                      <MapPin className="mr-1 h-4 w-4 inline" /> Sorocaba, SP
                    </span>
                  </div>
                </div>
                <div className="experience-content p-6">
                  <h4 className="text-base text-white font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-cyan-400" /> Principais Conquistas:
                  </h4>
                  <ul className="list-none p-0 mb-4 flex flex-col gap-2">
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Gestão e otimização do CRM, organizando dados de clientes e automatizando processos para melhorar
                      relacionamento
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Análise de dados e dashboards avançados com Power BI e implementação de APIs em Python via Meta
                      for Developers
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Liderança no desenvolvimento de campanhas, resultando na duplicação das conversões de comércios
                      locais em 30 dias
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Vendas de imóveis, aumentando o fluxo de clientes para a imobiliária com dados armazenados no CRM
                      Kenlo
                    </li>
                  </ul>
                  <h4 className="text-base text-white font-semibold mb-2 flex items-center gap-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-cyan-purple">Meta Ads</span>
                    <span className="badge badge-cyan-purple">Google Ads</span>
                    <span className="badge badge-cyan-purple">Power BI</span>
                    <span className="badge badge-cyan-purple">Python</span>
                    <span className="badge badge-cyan-purple">CRM</span>
                    <span className="badge badge-cyan-purple">Data Analysis</span>
                  </div>
                </div>
              </div>

              <div className="experience-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02]">
                <div className="experience-header flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 border-b border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="experience-icon p-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/20 text-3xl">
                      💻
                    </div>
                    <div className="flex-1">
                      <h3 className="experience-position text-xl text-white mb-2">Desenvolvedor Back-end</h3>
                      <p className="experience-company text-cyan-400 font-semibold mb-1">Naveguei (Autônomo)</p>
                      <p className="experience-type text-gray-400 text-sm">API de E-commerce</p>
                    </div>
                  </div>
                  <div className="experience-meta flex flex-col gap-2 text-gray-400 text-sm lg:items-end">
                    <span className="experience-period">
                      <Clock className="mr-1 h-4 w-4 inline" /> Projeto E-commerce
                    </span>
                    <span className="experience-location">
                      <MapPin className="mr-1 h-4 w-4 inline" /> Remoto
                    </span>
                  </div>
                </div>
                <div className="experience-content p-6">
                  <h4 className="text-base text-white font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-cyan-400" /> Principais Conquistas:
                  </h4>
                  <ul className="list-none p-0 mb-4 flex flex-col gap-2">
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      API de um E-commerce desenvolvido em C# seguindo o modelo CRUD SQL Server
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Sistema para cadastro de produtos, usuários, e solicitação de recuperação de senha
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Integração com meios de pagamentos e setores logísticos
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Líder de projeto aplicando metodologia ágil para otimizar processos e garantir entregas contínuas
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Resolução de problemas de gestão manual, criando back-end robusto que automatizou processos
                    </li>
                  </ul>
                  <h4 className="text-base text-white font-semibold mb-2 flex items-center gap-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-cyan-purple">C#</span>
                    <span className="badge badge-cyan-purple">SQL Server</span>
                    <span className="badge badge-cyan-purple">Visual Studio</span>
                    <span className="badge badge-cyan-purple">CRUD</span>
                    <span className="badge badge-cyan-purple">Payment Integration</span>
                    <span className="badge badge-cyan-purple">Agile</span>
                  </div>
                </div>
              </div>

              <div className="experience-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02]">
                <div className="experience-header flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-6 border-b border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="experience-icon p-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/20 text-3xl">
                      🛸
                    </div>
                    <div className="flex-1">
                      <h3 className="experience-position text-xl text-white mb-2">Desenvolvedor Full Stack</h3>
                      <p className="experience-company text-cyan-400 font-semibold mb-1">Naveguei - Enactus</p>
                      <p className="experience-type text-gray-400 text-sm">Plataforma Educacional</p>
                    </div>
                  </div>
                  <div className="experience-meta flex flex-col gap-2 text-gray-400 text-sm lg:items-end">
                    <span className="experience-period">
                      <Clock className="mr-1 h-4 w-4 inline" /> Em Desenvolvimento
                    </span>
                    <span className="experience-location">
                      <MapPin className="mr-1 h-4 w-4 inline" /> Remoto
                    </span>
                  </div>
                </div>
                <div className="experience-content p-6">
                  <h4 className="text-base text-white font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-cyan-400" /> Principais Conquistas:
                  </h4>
                  <ul className="list-none p-0 mb-4 flex flex-col gap-2">
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      API de cursos desenvolvido em C# utilizando modelo CRUD SQL Server
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Sistema para cadastro de cursos, usuários, quizzes e feedbacks
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Plataforma focada em empresas que acessam para disponibilizar aulas aos funcionários
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Líder de desenvolvimento aplicando metodologia Scrum para organizar sprints
                    </li>
                    <li className="text-gray-300 flex items-start gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:rounded-full before:mt-2 before:flex-shrink-0">
                      Desenvolvimento de plataforma completa (back-end e front-end) permitindo acesso seguro aos cursos
                    </li>
                  </ul>
                  <h4 className="text-base text-white font-semibold mb-2 flex items-center gap-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-cyan-purple">C#</span>
                    <span className="badge badge-cyan-purple">SQL Server</span>
                    <span className="badge badge-cyan-purple">Full Stack</span>
                    <span className="badge badge-cyan-purple">Scrum</span>
                    <span className="badge badge-cyan-purple">Corporate Training</span>
                    <span className="badge badge-cyan-purple">UX/UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="education-section bg-card-background">
          <div className="section-bg-elements">
            <span className="bg-emoji top-left">🎓</span>
            <span className="bg-emoji top-right">📚</span>
            <span className="bg-emoji center">🌌</span>
          </div>
          <div className="container">
            <div className="section-header">
              <div className="section-icon">🎓</div>
              <h2>Educação</h2>
              <div className="section-divider"></div>
            </div>

            <div className="education-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 max-w-4xl mx-auto">
              <div className="education-header flex items-center gap-4 p-6 border-b border-gray-700">
                <div className="education-icon p-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg border border-cyan-400/30 text-4xl">
                  🚀
                </div>
                <div className="flex-1">
                  <h3 className="education-title text-2xl text-white mb-2">Análise e Desenvolvimento de Sistemas</h3>
                  <p className="education-institution text-cyan-400 font-semibold mb-2">UNIP – Sorocaba</p>
                  <span className="badge badge-green-check">
                    <Award className="h-3 w-3" /> Concluído ✅
                  </span>
                </div>
              </div>
              <div className="education-content p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base text-white font-semibold mb-3">Principais Competências:</h4>
                    <ul className="list-none p-0 flex flex-col gap-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-cyan"></span>Desenvolvimento de Software 🛠️
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-cyan"></span>Banco de Dados e SQL 🗄️
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-cyan"></span>Análise de Sistemas 🔍
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-cyan"></span>Metodologias Ágeis ⚡
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base text-white font-semibold mb-3">Áreas de Especialização:</h4>
                    <ul className="list-none p-0 flex flex-col gap-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-purple"></span>Programação Orientada a Objetos 🌟
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-purple"></span>Desenvolvimento Web 🌐
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-purple"></span>Gestão de Projetos 📋
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bullet bullet-purple"></span>Arquitetura de Software 🏗️
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="courses-section bg-darker-background border-t border-purple-400/20">
          <div className="section-bg-elements">
            <span className="bg-emoji top-left">📚</span>
            <span className="bg-emoji top-right">🏆</span>
            <span className="bg-emoji bottom-left">🎯</span>
            <span className="bg-emoji bottom-right">🌌</span>
          </div>
          <div className="container">
            <div className="section-header">
              <div className="section-icon">📖</div>
              <h2>Cursos</h2>
              <div className="section-divider"></div>
              <p className="section-description">Sempre explorando novos conhecimentos 🌌</p>
            </div>

            <div className="current-courses mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Rocket className="text-3xl" /> Em Andamento
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="course-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50">
                  <div className="course-header flex items-start justify-between p-6 border-b border-gray-700">
                    <div className="course-icon text-3xl flex-shrink-0">🎓</div>
                    <div className="flex-1 ml-4">
                      <h4 className="course-title text-lg text-white mb-2">
                        CS50&apos;s Introduction to Databases with SQL
                      </h4>
                      <p className="course-institution text-cyan-400 font-semibold mb-2">Harvard University</p>
                      <div className="course-badges flex items-center gap-2 mt-2">
                        <span className="badge badge-orange-status flex items-center gap-1">
                          <Bolt className="size-3" /> Em Andamento
                        </span>
                        <span className="badge badge-purple-outline">Curso Internacional</span>
                      </div>
                    </div>
                  </div>
                  <div className="course-content p-6">
                    <p className="course-description text-gray-300 mb-4">
                      Curso avançado de Harvard focado em bancos de dados e SQL, cobrindo desde conceitos fundamentais
                      até otimização avançada.
                    </p>
                    <h4 className="text-base text-white font-semibold mb-2">Competências:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-cyan-light">SQL</span>
                      <span className="badge badge-cyan-light">Database Design</span>
                      <span className="badge badge-cyan-light">Query Optimization</span>
                      <span className="badge badge-cyan-light">Data Modeling</span>
                    </div>
                  </div>
                </div>
                <div className="course-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50">
                  <div className="course-header flex items-start justify-between p-6 border-b border-gray-700">
                    <div className="course-icon text-3xl flex-shrink-0">🌍</div>
                    <div className="flex-1 ml-4">
                      <h4 className="course-title text-lg text-white mb-2">Curso de Inglês</h4>
                      <p className="course-institution text-cyan-400 font-semibold mb-2">Escola de Idiomas</p>
                      <div className="course-badges flex items-center gap-2 mt-2">
                        <span className="badge badge-orange-status flex items-center gap-1">
                          <Bolt className="size-3" /> Em Andamento
                        </span>
                        <span className="badge badge-purple-outline">Desenvolvimento Pessoal</span>
                      </div>
                    </div>
                  </div>
                  <div className="course-content p-6">
                    <p className="course-description text-gray-300 mb-4">
                      Aprimoramento do inglês para nível avançado, focando em comunicação técnica e profissional.
                    </p>
                    <h4 className="text-base text-white font-semibold mb-2">Competências:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-cyan-light">English</span>
                      <span className="badge badge-cyan-light">Technical Communication</span>
                      <span className="badge badge-cyan-light">Business English</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="completed-courses mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-3xl" /> Concluídos
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="completed-course-card bg-space-dark/30 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6 transition-all duration-300 hover:border-green-400/50 hover:scale-105">
                  <div className="completed-course-icon text-2xl mb-3">🐍</div>
                  <span className="badge badge-green-status">2025</span>
                  <h4 className="completed-course-title text-sm text-white font-semibold mb-2">Curso de Python</h4>
                  <p className="completed-course-institution text-cyan-400 text-sm mb-2">Santander</p>
                  <div className="completed-course-meta flex items-center justify-between">
                    <span className="badge badge-purple-outline">Programação</span>
                    <span className="completed-course-duration text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="size-3" /> 8h
                    </span>
                  </div>
                </div>
                <div className="completed-course-card bg-space-dark/30 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6 transition-all duration-300 hover:border-green-400/50 hover:scale-105">
                  <div className="completed-course-icon text-2xl mb-3">🤖</div>
                  <span className="badge badge-green-status">2025</span>
                  <h4 className="completed-course-title text-sm text-white font-semibold mb-2">Curso de IA</h4>
                  <p className="completed-course-institution text-cyan-400 text-sm mb-2">Santander</p>
                  <div className="completed-course-meta flex items-center justify-between">
                    <span className="badge badge-purple-outline">Inteligência Artificial</span>
                    <span className="completed-course-duration text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="size-3" /> 8h
                    </span>
                  </div>
                </div>
                <div className="completed-course-card bg-space-dark/30 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6 transition-all duration-300 hover:border-green-400/50 hover:scale-105">
                  <div className="completed-course-icon text-2xl mb-3">📚</div>
                  <span className="badge badge-green-status">2024</span>
                  <h4 className="completed-course-title text-sm text-white font-semibold mb-2">Curso de Python</h4>
                  <p className="completed-course-institution text-cyan-400 text-sm mb-2">UNIP</p>
                  <div className="completed-course-meta flex items-center justify-between">
                    <span className="badge badge-purple-outline">Programação</span>
                    <span className="completed-course-duration text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="size-3" /> N/A
                    </span>
                  </div>
                </div>
                <div className="completed-course-card bg-space-dark/30 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6 transition-all duration-300 hover:border-green-400/50 hover:scale-105">
                  <div className="completed-course-icon text-2xl mb-3">📊</div>
                  <span className="badge badge-green-status">2024</span>
                  <h4 className="completed-course-title text-sm text-white font-semibold mb-2">Power BI</h4>
                  <p className="completed-course-institution text-cyan-400 text-sm mb-2">UNIP</p>
                  <div className="completed-course-meta flex items-center justify-between">
                    <span className="badge badge-purple-outline">Business Intelligence</span>
                    <span className="completed-course-duration text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="size-3" /> 40h
                    </span>
                  </div>
                </div>
                <div className="completed-course-card bg-space-dark/30 border border-purple-400/20 rounded-lg backdrop-blur-sm p-6 transition-all duration-300 hover:border-green-400/50 hover:scale-105">
                  <div className="completed-course-icon text-2xl mb-3">⚡</div>
                  <span className="badge badge-green-status">2024</span>
                  <h4 className="completed-course-title text-sm text-white font-semibold mb-2">
                    PL-900 (Microsoft Power Platform)
                  </h4>
                  <p className="completed-course-institution text-cyan-400 text-sm mb-2">UNIP</p>
                  <div className="completed-course-meta flex items-center justify-between">
                    <span className="badge badge-purple-outline">Microsoft Certification</span>
                    <span className="completed-course-duration text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="size-3" /> 40h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="call-to-action-card bg-space-dark/70 border border-purple-400/50 rounded-lg backdrop-blur-sm p-8 text-center mt-12">
              <div className="cta-icon flex justify-center mb-4 text-4xl animate-bounce">🚀</div>
              <h3 className="text-3xl font-bold text-white mb-4">Aprendizado Contínuo</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Estou sempre em busca de novos conhecimentos e certificações para aprimorar minhas habilidades e agregar
                ainda mais valor aos projetos. A evolução é constante! ⭐
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section bg-background-color">
          <div className="section-bg-elements">
            <span className="bg-emoji top-left">📞</span>
            <span className="bg-emoji top-right">💌</span>
            <span className="bg-emoji bottom-left">🛸</span>
            <span className="bg-emoji bottom-right">🌌</span>
          </div>
          <div className="container">
            <div className="section-header">
              <div className="section-icon relative">
                🚀<span className="ping-icon absolute -top-2 -right-2 text-2xl animate-ping">📡</span>
              </div>
              <h2>Contato</h2>
              <div className="section-divider"></div>
              <p className="section-description">Vamos conectar e criar algo extraordinário juntos! 🌌</p>
            </div>

            <div className="contact-info-grid mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <SatelliteDish className="text-3xl" /> Informações
              </h3>
              <div className="flex flex-col gap-4">
                <div className="contact-item-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-4 flex items-center gap-4 transition-all duration-300 hover:border-cyan-400/50">
                  <div className="contact-item-icon p-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/20 text-2xl transition-transform duration-300">
                    📧
                  </div>
                  <div>
                    <h4 className="text-base text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400 transition-colors duration-300 hover:text-cyan-400">
                      liragustavo718@gmail.com
                    </p>
                  </div>
                </div>
                <div className="contact-item-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-4 flex items-center gap-4 transition-all duration-300 hover:border-cyan-400/50">
                  <div className="contact-item-icon p-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/20 text-2xl transition-transform duration-300">
                    📱
                  </div>
                  <div>
                    <h4 className="text-base text-white font-semibold mb-1">Telefone</h4>
                    <p className="text-gray-400 transition-colors duration-300 hover:text-cyan-400">
                      +55 (15) 99649-9604
                    </p>
                  </div>
                </div>
                <div className="contact-item-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-4 flex items-center gap-4 transition-all duration-300 hover:border-cyan-400/50">
                  <div className="contact-item-icon p-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/20 text-2xl transition-transform duration-300">
                    🌍
                  </div>
                  <div>
                    <h4 className="text-base text-white font-semibold mb-1">Localização</h4>
                    <p className="text-gray-400 transition-colors duration-300 hover:text-cyan-400">
                      Sorocaba, SP - Brasil
                    </p>
                  </div>
                </div>
                <div className="contact-item-card bg-space-dark/50 border border-purple-400/20 rounded-lg backdrop-blur-sm p-4 flex items-center gap-4 transition-all duration-300 hover:border-cyan-400/50">
                  <div className="contact-item-icon p-3 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-lg border border-purple-400/20 text-2xl transition-transform duration-300">
                    💼
                  </div>
                  <div>
                    <h4 className="text-base text-white font-semibold mb-1">LinkedIn</h4>
                    <p className="text-gray-400 transition-colors duration-300 hover:text-cyan-400">
                      linkedin.com/in/gustavo-matias
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links-contact mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Redes Sociais 🌐</h3>
              <div className="flex gap-4">
                <a
                  href="https://br.linkedin.com/in/gustavo-matias-66a860278"
                  target="_blank"
                  className="social-btn flex items-center justify-center size-10 rounded-md text-white transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 hover:scale-110"
                  aria-label="LinkedIn"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/Gustavolirah"
                  target="_blank"
                  className="social-btn flex items-center justify-center size-10 rounded-md text-white transition-all duration-300 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 hover:scale-110"
                  aria-label="GitHub"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:liragustavo718@gmail.com"
                  target="_blank"
                  className="social-btn flex items-center justify-center size-10 rounded-md text-white transition-all duration-300 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 hover:scale-110"
                  aria-label="Email"
                  rel="noreferrer"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer bg-darker-background py-8 text-center text-sm text-gray-400 border-t border-purple-400/20">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2025 Gustavo Matias. Todos os direitos reservados. 🌌</p>
          <div className="footer-made-with flex items-center gap-2 text-gray-400">
            <span>Feito com</span>
            <Heart className="text-red-400 text-xl animate-pulse" />
            <span>e</span>
            <Code className="text-cyan-400 text-xl" />
            <span>por Gustavo Matias</span>
            <Rocket className="text-xl animate-bounce" />
          </div>
        </div>
      </footer>
    </>
  )
}

// Dummy imports for Lucide React icons used in the original HTML but not directly in the JSX
// This is to ensure all icons are accounted for if they were intended to be used.
// In a real Next.js project, you'd only import what's used.
import { Cloud, Terminal, Database, GitBranch, Brain, Server } from "lucide-react"
