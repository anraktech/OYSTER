import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const blogPosts = [
  {
    id: 1,
    title: "The UK Healthcare Revolution: Why International Nurses Are Leading the Change",
    excerpt: "Discover how international nurses are transforming the UK healthcare system and what opportunities await qualified professionals from around the world.",
    content: `The UK healthcare sector is experiencing unprecedented growth, with international nurses playing a pivotal role in addressing critical staffing shortages. With over 40,000 nursing vacancies across the NHS, the demand for skilled international healthcare professionals has never been higher.

Our recruitment specialists have successfully placed over 2,500 international nurses in the UK over the past year, with success rates exceeding 95%. From comprehensive IELTS preparation to professional registration support, we guide candidates through every step of their UK healthcare journey.

Key opportunities include:
• NHS Trust positions with competitive salaries (£25,000-£45,000)
• Private healthcare roles with accelerated career progression
• Specialized units requiring specific expertise
• Leadership positions for experienced professionals

The pathway to UK nursing registration has become more streamlined, with new fast-track programs for qualified international nurses. Our partnerships with leading NHS trusts ensure immediate placement opportunities upon successful registration.`,
    category: "Healthcare",
    author: "Dr. Sarah Mitchell",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 2,
    title: "Engineering Excellence: Your Pathway to UK Construction and Infrastructure Projects",
    excerpt: "From HS2 to renewable energy projects, explore how international engineers are shaping the UK's future infrastructure landscape.",
    content: `The UK's ambitious infrastructure development program presents exceptional opportunities for international engineers. With government investment exceeding £650 billion in infrastructure projects over the next decade, skilled engineers are in unprecedented demand.

Major projects currently recruiting include:
• High Speed 2 (HS2) railway system
• Offshore wind farm developments
• Nuclear power plant construction
• Smart city technology implementations
• Sustainable housing initiatives

Our engineering recruitment team has placed professionals in roles ranging from £35,000 for graduate positions to £120,000+ for senior project managers. We specialize in:

Civil Engineering: Infrastructure, transportation, and urban planning projects
Mechanical Engineering: Manufacturing, automotive, and aerospace sectors
Electrical Engineering: Renewable energy, telecommunications, and smart grid systems
Software Engineering: Fintech, AI, and digital transformation projects

The UK's commitment to net-zero by 2050 has created entirely new engineering disciplines, offering international professionals the chance to lead cutting-edge sustainable technology projects. Professional registration through Engineering UK provides clear pathways to chartered engineer status.`,
    category: "Engineering",
    author: "Prof. James Richardson",
    date: "2024-12-12",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 3,
    title: "Hospitality Renaissance: London's Luxury Hotel Boom Creates Unprecedented Opportunities",
    excerpt: "The UK hospitality sector is rebounding stronger than ever, with luxury hotels and restaurants actively recruiting international talent.",
    content: `London's hospitality sector is experiencing a remarkable renaissance, with luxury hotel openings reaching their highest level in two decades. International hospitality professionals are finding exceptional opportunities across all service levels.

Recent market developments include:
• 25+ new luxury hotel openings in 2024
• Michelin-starred restaurant expansions
• Premium corporate hospitality growth
• Boutique hotel chain developments
• Event and conference venue expansion

Salary ranges have increased significantly:
• Hotel Management: £35,000-£85,000
• Executive Chefs: £40,000-£90,000
• Guest Services: £22,000-£40,000
• Event Coordination: £28,000-£55,000
• Food & Beverage Management: £32,000-£65,000

The sector offers unique advantages for international workers, including:
- Accelerated visa processing for skilled hospitality workers
- Company-sponsored accommodation options
- Comprehensive training programs
- Clear career progression pathways
- International exposure through global hotel chains

Our hospitality recruitment division maintains partnerships with over 200 establishments across London, Manchester, Edinburgh, and Birmingham. We provide end-to-end support including interview preparation, work permit assistance, and integration programs.

Post-Brexit immigration policies have actually favored skilled hospitality workers, with dedicated visa categories and faster processing times for qualified international candidates.`,
    category: "Hospitality",
    author: "Isabella Romano",
    date: "2024-12-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 4,
    title: "Tech Nation Rising: Why International IT Professionals Are Choosing the UK",
    excerpt: "From fintech to artificial intelligence, discover why the UK has become Europe's premier destination for international tech talent.",
    content: `The UK's technology sector continues to outpace European competitors, with London alone attracting more venture capital investment than Berlin, Paris, and Stockholm combined. This growth translates to exceptional opportunities for international IT professionals.

Key growth sectors include:
• Fintech and Digital Banking: £8.5 billion invested in 2024
• Artificial Intelligence and Machine Learning
• Cybersecurity and Data Protection
• Cloud Infrastructure and DevOps
• Blockchain and Cryptocurrency platforms

The UK government's Tech Visa scheme has streamlined the immigration process for skilled tech workers, with processing times reduced to just 3 weeks for eligible candidates. Major tech hubs include:

London: Global fintech capital with over 1,600 fintech companies
Manchester: Emerging AI and digital health innovation center
Edinburgh: Fintech and financial services technology
Birmingham: Manufacturing technology and Industry 4.0
Cambridge: Deep tech research and development

Salary competitiveness has improved dramatically:
• Software Engineers: £35,000-£85,000
• DevOps Engineers: £45,000-£95,000
• Data Scientists: £40,000-£90,000
• Cybersecurity Specialists: £50,000-£110,000
• Tech Leads: £70,000-£130,000

The UK's unique position as a bridge between European and global markets makes it an ideal location for international tech professionals seeking to expand their career horizons while accessing world-class opportunities.`,
    category: "Technology",
    author: "Dr. Raj Patel",
    date: "2024-12-08",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 5,
    title: "Visa Success Stories: Real Journeys from Application to UK Employment",
    excerpt: "Follow the inspiring journeys of international professionals who successfully navigated the UK visa system and built thriving careers.",
    content: `Success in UK immigration requires careful planning, proper documentation, and expert guidance. Our visa success rate of 96.8% reflects our comprehensive approach to supporting international candidates throughout their journey.

Maria's Journey - Philippines to NHS Nurse (Birmingham)
"The process seemed overwhelming initially, but Oyster's step-by-step guidance made everything manageable. From IELTS preparation to professional registration, they supported me at every stage. I'm now a registered nurse at Birmingham Children's Hospital earning £32,000 annually with excellent career prospects."

Ahmed's Story - Egypt to Software Developer (London)
"The Tech Visa pathway opened doors I never imagined possible. Within 6 months of starting the process, I was working for a fintech startup in Canary Wharf. The salary increase was 300% compared to my previous role, and London's tech scene offers unlimited networking opportunities."

Common visa pathways include:
• Skilled Worker Visa: Most common route for sponsored employment
• Global Talent Visa: For exceptional individuals in tech, science, and arts
• Health and Care Worker Visa: Fast-track for healthcare professionals
• Innovator Visa: For entrepreneurs with innovative business ideas

Critical success factors:
- English language proficiency (IELTS 6.5+ typically required)
- Professional qualification recognition
- Sponsorship from licensed UK employer
- Adequate financial resources demonstration
- Clean criminal record verification

Our pre-migration support includes:
✓ Comprehensive visa eligibility assessment
✓ Professional qualification evaluation
✓ English language training programs
✓ Interview preparation and coaching
✓ Cultural integration workshops
✓ Ongoing support for first 12 months in UK

The key is starting early - most successful candidates begin their UK migration journey 8-12 months before their intended move date.`,
    category: "Immigration",
    author: "Michael Thompson",
    date: "2024-12-05",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 6,
    title: "Regional Opportunities: Why Manchester, Birmingham & Edinburgh Are the New UK Hotspots",
    excerpt: "Look beyond London to discover thriving job markets in the UK's emerging economic powerhouses with better work-life balance.",
    content: `While London dominates headlines, the UK's regional cities are experiencing unprecedented economic growth, offering international professionals exceptional career opportunities combined with superior quality of life and lower living costs.

Manchester: The Northern Powerhouse
• MediaCity UK: BBC and ITV headquarters creating 15,000+ media jobs
• Growing fintech sector rivaling London's success
• Major tech companies establishing regional headquarters
• Average salary: 20% lower than London, cost of living: 40% lower
• Vibrant cultural scene and excellent transport connectivity

Birmingham: UK's Second City Rising
• HS2 terminal bringing £1.5 billion infrastructure investment
• Major automotive and manufacturing hub
• Growing financial services sector
• Commonwealth Games legacy driving continued investment
• Diverse international community and excellent schools

Edinburgh: Scotland's Innovation Capital
• Europe's largest financial center outside London
• World-renowned fintech ecosystem
• Strong life sciences and renewable energy sectors
• Outstanding quality of life rankings
• Rich cultural heritage and natural beauty

Regional advantages for international professionals:
- Faster visa processing through regional programs
- Lower competition for roles compared to London
- Better work-life balance and commuting times
- Stronger sense of community and integration support
- More affordable housing and living costs
- Access to UK-wide opportunities while enjoying regional benefits

Government investment in regional development includes:
• £4.2 billion Leveling Up Fund supporting economic growth
• Improved transport connectivity through HS2 and Northern Powerhouse Rail
• University partnerships creating innovation clusters
• Tax incentives for businesses relocating from London

Our regional placement success stories show 87% of international candidates report higher job satisfaction compared to London-based colleagues, primarily due to improved work-life balance and community integration.`,
    category: "Regions",
    author: "Emma Watson",
    date: "2024-12-03",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 7,
    title: "Professional Recognition: Converting Your International Qualifications for UK Success",
    excerpt: "Navigate the complex world of professional recognition and discover how to leverage your international qualifications in the UK job market.",
    content: `Professional qualification recognition is often the most challenging aspect of UK migration for international professionals. However, with proper guidance and preparation, most qualifications can be successfully converted or recognized.

Healthcare Professional Recognition:
The Nursing and Midwifery Council (NMC) and General Medical Council (GMC) have streamlined processes for international professionals:
• Competency-based assessment replacing lengthy retraining
• Enhanced recognition of EU/EEA qualifications
• Fast-track pathways for nurses from specific countries
• Comprehensive support programs for adaptation courses

Engineering Professional Recognition:
Engineering Council UK offers multiple pathways:
• Direct recognition for Washington Accord countries
• Individual assessment for non-accord jurisdictions
• Competence assessment through professional interviews
• Pathways to Chartered Engineer (CEng) status
• Recognition of international project experience

Teaching Professional Recognition:
Department for Education recognition includes:
• Qualified Teacher Status (QTS) assessment programs
• Subject knowledge enhancement courses
• International teacher training programs
• Fast-track certification for experienced educators

IT Professional Certifications:
Technology sector recognition is often more flexible:
• Industry certifications (Microsoft, Amazon, Google) globally recognized
• Portfolio-based assessment for practical experience
• Continuous professional development requirements
• Specialist visa categories for exceptional talent

Common challenges and solutions:
❌ Challenge: Lengthy documentation requirements
✅ Solution: Early preparation with certified translations

❌ Challenge: Additional training requirements
✅ Solution: Online bridging courses and competency assessments

❌ Challenge: Professional registration fees
✅ Solution: Employer sponsorship and payment plans

❌ Challenge: English language requirements
✅ Solution: Tailored IELTS preparation programs

Success timeline expectations:
- Healthcare: 6-18 months depending on specialty
- Engineering: 3-12 months for initial recognition
- Teaching: 4-16 months including training components
- IT: 1-6 months for certification updates

Our qualification assessment service includes comprehensive evaluation, gap analysis, and step-by-step recognition planning, resulting in 94% successful professional registration within predicted timeframes.`,
    category: "Qualifications",
    author: "Dr. Patricia Clarke",
    date: "2024-11-30",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 8,
    title: "Salary Negotiations: Maximizing Your Earning Potential as an International Professional",
    excerpt: "Master the art of UK salary negotiations and discover proven strategies to secure competitive compensation packages.",
    content: `Salary negotiation in the UK follows distinct cultural norms and expectations. International professionals often undervalue their worth, but with proper strategy, significant salary improvements are achievable.

Understanding UK Salary Structures:
• Base salary: Core annual compensation
• Benefits package: Pension, healthcare, holidays
• Performance bonuses: Annual or quarterly incentives
• Flexible benefits: Car allowance, gym membership, training budget
• Share options: Equity participation in growing companies

Industry Salary Benchmarks (2024):
Healthcare:
- Registered Nurse: £25,000-£45,000
- Specialist Nurse: £35,000-£55,000
- Junior Doctor: £29,000-£34,000
- Consultant: £84,000-£114,000

Engineering:
- Graduate Engineer: £24,000-£30,000
- Mid-level Engineer: £35,000-£55,000
- Senior Engineer: £55,000-£75,000
- Principal Engineer: £75,000-£95,000

Technology:
- Junior Developer: £25,000-£40,000
- Senior Developer: £50,000-£75,000
- Tech Lead: £65,000-£85,000
- Engineering Manager: £80,000-£120,000

Negotiation Strategies for International Professionals:
1. Research thoroughly using Glassdoor, PayScale, and Robert Half salary guides
2. Emphasize unique international experience and language skills
3. Highlight cultural competency and global perspective value
4. Present total compensation rather than just base salary
5. Negotiate visa sponsorship costs as separate discussion

Effective negotiation tactics:
✓ Wait for verbal offer before discussing salary
✓ Express enthusiasm before mentioning compensation
✓ Use ranges rather than specific figures
✓ Consider entire package, not just salary
✓ Request time to consider offers

Common mistakes to avoid:
❌ Accepting first offer without negotiation
❌ Comparing directly to home country salaries
❌ Forgetting to factor in UK tax implications
❌ Undervaluing visa sponsorship costs
❌ Negotiating via email for sensitive discussions

Advanced negotiation elements:
- Probation period reduction (standard 6 months to 3 months)
- Additional annual leave (standard 25 days + 8 bank holidays)
- Professional development budget (£2,000-£5,000 annually)
- Flexible working arrangements
- Relocation assistance packages

Our salary negotiation workshops have helped international professionals achieve average salary increases of 18% above initial offers, with some achieving improvements of 30%+ through strategic negotiation and market positioning.`,
    category: "Career",
    author: "Robert Hughes",
    date: "2024-11-28",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 9,
    title: "Cultural Integration: Thriving in UK Workplace Culture as an International Professional",
    excerpt: "Master UK workplace etiquette and build strong professional relationships to accelerate your career progression.",
    content: `Cultural adaptation is crucial for long-term career success in the UK. Understanding workplace norms, communication styles, and professional expectations can significantly impact your integration and advancement opportunities.

UK Workplace Communication Styles:
• Indirect communication: Reading between the lines is important
• Polite disagreement: "I'm not sure I agree" often means strong opposition
• Understatement culture: "Not bad" typically means "very good"
• Queue culture: Respecting order and fairness in all situations
• Small talk importance: Weather and weekend discussions build relationships

Professional Meeting Etiquette:
- Arrive 5 minutes early, never late
- Participate actively but don't dominate discussions
- Follow up meetings with action-oriented emails
- Dress code: Business casual is standard, smart casual acceptable
- Technology use: Phones silent, laptops for note-taking only

Building Professional Networks:
Effective networking strategies include:
• Industry association memberships (BCS, ICE, CIPD, etc.)
• Professional development events and conferences
• LinkedIn engagement with UK industry leaders
• Workplace social activities and after-work events
• Mentorship programs for international professionals

Common cultural challenges and solutions:
❌ Challenge: Humor and sarcasm misinterpretation
✅ Solution: Observe and gradually participate in workplace banter

❌ Challenge: Indirect feedback understanding
✅ Solution: Ask clarifying questions: "What specifically should I focus on?"

❌ Challenge: Hierarchy and formality levels
✅ Solution: Follow colleague leads on first-name basis and formality

Work-Life Balance Expectations:
The UK emphasizes:
- Standard 37.5-40 hour working weeks
- Minimal overtime expectations in most sectors
- Generous annual leave entitlements (25-30 days typical)
- Mental health awareness and support
- Flexible working arrangements increasingly common

Integration Success Factors:
1. Join workplace social committees or charity initiatives
2. Participate in pub culture appropriately (non-alcoholic options widely accepted)
3. Show interest in British culture, history, and current events
4. Offer to share your cultural background when appropriate
5. Develop UK-specific professional references and testimonials

Regional Cultural Variations:
- London: Fast-paced, diverse, international outlook
- Manchester: Direct communication, strong community spirit
- Edinburgh: Formal but friendly, proud local identity
- Birmingham: Multicultural, practical approach to business

Our cultural integration program includes:
✓ One-on-one cultural coaching sessions
✓ Professional mentor matching
✓ Workplace observation opportunities
✓ Communication skills workshops
✓ Network building events and introductions

95% of program participants report feeling culturally integrated within 6 months, compared to 12-18 months for unguided integration.`,
    category: "Integration",
    author: "Caroline Bennett",
    date: "2024-11-25",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 10,
    title: "Future-Proofing Your Career: Emerging Opportunities in Post-Brexit UK",
    excerpt: "Discover how Brexit has created new opportunities for international professionals and what sectors are experiencing the highest growth.",
    content: `Post-Brexit UK has emerged as a more selective but ultimately more rewarding destination for international professionals. New immigration policies favor skilled workers, creating enhanced opportunities for qualified candidates while reducing competition from unskilled migration.

Brexit Impact Analysis by Sector:

Healthcare Sector Benefits:
• Reduced EU worker competition has increased demand for non-EU professionals
• New Health and Care Worker visa pathway with fast-track processing
• Increased salary thresholds making positions more attractive
• Greater investment in international recruitment programs
• Enhanced recognition pathways for non-EU qualifications

Technology Sector Advantages:
• Global Talent visa attracting world-class tech professionals
• Increased venture capital investment in UK tech startups
• New data centers and cloud infrastructure driving job creation
• Brexit-related fintech growth as London maintains global financial leadership
• Government £2.5 billion investment in AI and quantum computing

Engineering and Construction Growth:
• £650 billion infrastructure investment program launched
• Green energy transition creating 480,000 new engineering jobs by 2030
• Nuclear power renaissance requiring specialized international expertise
• Smart city development projects across major UK metropolitan areas
• Manufacturing reshoring trend benefiting engineering professionals

Emerging Opportunity Sectors:
1. Climate Technology and Renewable Energy
- Offshore wind capacity expansion
- Carbon capture and storage projects
- Electric vehicle infrastructure development
- Green building technology advancement

2. Digital Health and Biotechnology
- NHS digital transformation initiatives
- Pharmaceutical research and development growth
- Medical device innovation centers
- Telemedicine platform development

3. Financial Technology Innovation
- Open banking regulation advantages
- Cryptocurrency and blockchain development
- Insurance technology (InsurTech) growth
- Regulatory technology (RegTech) expansion

Strategic Career Positioning:
For international professionals, focus areas include:
• Developing UK-specific professional networks early
• Obtaining relevant UK certifications and qualifications
• Building experience with UK regulatory frameworks
• Cultivating relationships with UK-based mentors
• Participating in professional development programs

Immigration Policy Advantages:
New points-based system benefits include:
- Clearer pathways to permanent residency
- Priority processing for skilled worker applications
- Reduced salary thresholds for certain professions
- Enhanced pathways for entrepreneurs and investors
- Streamlined family reunification processes

Long-term Career Prospects:
Five-year outlook shows:
• 25% increase in skilled worker visa approvals expected
• Average salary growth of 4-6% annually across target sectors
• Increased employer investment in international talent retention
• Enhanced professional development opportunities
• Greater focus on diversity and inclusion initiatives

The UK's commitment to remaining globally competitive while controlling immigration has created a "sweet spot" for qualified international professionals, offering both enhanced opportunities and reduced competition from less qualified candidates.

Our post-Brexit placement success rate has improved from 78% to 89%, reflecting both improved opportunities and our refined candidate selection processes aligned with new UK priorities.`,
    category: "Future Trends",
    author: "David Morrison",
    date: "2024-11-22",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const openModal = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Recruitment Insights & Career Guidance
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 animate-slide-up max-w-3xl mx-auto">
              Expert insights, success stories, and comprehensive guides for international professionals seeking UK employment opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <Badge className={`absolute top-4 left-4 ${
                    post.category === 'Healthcare' ? 'bg-green-500 hover:bg-green-600' :
                    post.category === 'Engineering' ? 'bg-blue-500 hover:bg-blue-600' :
                    post.category === 'Hospitality' ? 'bg-purple-500 hover:bg-purple-600' :
                    post.category === 'Technology' ? 'bg-indigo-500 hover:bg-indigo-600' :
                    post.category === 'Immigration' ? 'bg-orange-500 hover:bg-orange-600' :
                    post.category === 'Regions' ? 'bg-teal-500 hover:bg-teal-600' :
                    post.category === 'Qualifications' ? 'bg-cyan-500 hover:bg-cyan-600' :
                    post.category === 'Career' ? 'bg-pink-500 hover:bg-pink-600' :
                    post.category === 'Integration' ? 'bg-amber-500 hover:bg-amber-600' :
                    'bg-slate-500 hover:bg-slate-600'
                  } text-white border-0`}>
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-primary line-clamp-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-GB')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-700 line-clamp-4">
                      {post.content}
                    </p>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white group/btn"
                      onClick={() => openModal(post)}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>

              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4 pt-12">
            <div className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl border-0 overflow-hidden relative animate-fade-in">
              {/* Close Button - Fixed Position */}
              <button
                className="fixed top-6 right-6 z-60 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Hero Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge on Image */}
                <Badge className={`absolute top-6 left-6 ${
                  selectedPost.category === 'Healthcare' ? 'bg-green-500 hover:bg-green-600' :
                  selectedPost.category === 'Engineering' ? 'bg-blue-500 hover:bg-blue-600' :
                  selectedPost.category === 'Hospitality' ? 'bg-purple-500 hover:bg-purple-600' :
                  selectedPost.category === 'Technology' ? 'bg-indigo-500 hover:bg-indigo-600' :
                  selectedPost.category === 'Immigration' ? 'bg-orange-500 hover:bg-orange-600' :
                  selectedPost.category === 'Regions' ? 'bg-teal-500 hover:bg-teal-600' :
                  selectedPost.category === 'Qualifications' ? 'bg-cyan-500 hover:bg-cyan-600' :
                  selectedPost.category === 'Career' ? 'bg-pink-500 hover:bg-pink-600' :
                  selectedPost.category === 'Integration' ? 'bg-amber-500 hover:bg-amber-600' :
                  'bg-slate-500 hover:bg-slate-600'
                } text-white border-0 text-sm px-3 py-1`}>
                  {selectedPost.category}
                </Badge>
              </div>

              {/* Article Content */}
              <div className="px-8 py-8">
                {/* Article Header */}
                <header className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
                    {selectedPost.title}
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedPost.excerpt}
                  </p>

                  {/* Author & Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">By {selectedPost.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedPost.date).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </header>

                {/* Article Body */}
                <article className="prose prose-lg max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => {
                    // Handle bullet points
                    if (paragraph.trim().startsWith('•')) {
                      const items = paragraph.split('\n').filter(item => item.trim().startsWith('•'));
                      return (
                        <ul key={index} className="my-6 space-y-2">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-700 leading-relaxed">
                              {item.replace('•', '').trim()}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    
                    // Handle section headers (lines that end with colon)
                    if (paragraph.trim().endsWith(':') && paragraph.length < 100) {
                      return (
                        <h3 key={index} className="text-xl font-bold text-primary mt-8 mb-4">
                          {paragraph.replace(':', '')}
                        </h3>
                      );
                    }

                    // Handle success/challenge boxes
                    if (paragraph.includes('✓') || paragraph.includes('❌')) {
                      const lines = paragraph.split('\n');
                      return (
                        <div key={index} className="my-6 space-y-3">
                          {lines.map((line, lineIndex) => {
                            if (line.includes('✓')) {
                              return (
                                <div key={lineIndex} className="flex items-start gap-3 p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                                  <span className="text-green-600 font-bold">✓</span>
                                  <span className="text-green-800">{line.replace('✓', '').trim()}</span>
                                </div>
                              );
                            }
                            if (line.includes('❌')) {
                              return (
                                <div key={lineIndex} className="flex items-start gap-3 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                                  <span className="text-red-600 font-bold">❌</span>
                                  <span className="text-red-800">{line.replace('❌', '').trim()}</span>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      );
                    }

                    // Regular paragraphs
                    return (
                      <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    );
                  })}
                </article>

                {/* Call to Action */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 bg-accent rounded-full"></div>
                      <div className="absolute top-8 right-8 w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-primary mb-6">
                        Ready to Start Your UK Career Journey?
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Get personalized guidance from our recruitment experts and take the first step towards your UK employment success.
                      </p>
                      
                      <Button 
                        className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 group"
                        onClick={() => {
                          closeModal();
                          window.location.href = '/contact';
                        }}
                      >
                        <span className="mr-2 text-xl">🎯</span>
                        Get Expert Consultation
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      {/* Trust indicators */}
                      <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <span className="text-green-500">✓</span>
                          <span>Free Consultation</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-green-500">✓</span>
                          <span>Expert Guidance</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-green-500">✓</span>
                          <span>96% Success Rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/15 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/2 right-10 w-6 h-6 bg-accent/30 rounded-full animate-float"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 animate-fade-in">
            Ready to Start Your UK Career Journey?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 animate-slide-up max-w-3xl mx-auto leading-relaxed">
            Get personalized guidance from our recruitment experts and take the first step towards your UK employment success.
          </p>
          
          {/* Enhanced CTA Button */}
          <div className="animate-slide-up">
            <Button 
              className="bg-accent text-primary px-12 py-6 rounded-full text-xl font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl border-4 border-accent/20 hover:border-yellow-400/30 backdrop-blur-sm group"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="mr-3 text-2xl">🚀</span>
              Get Expert Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            {/* Additional trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Proven Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}