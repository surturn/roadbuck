import { Header } from "@/components/Header";
import { TranslationProvider, useTranslation } from "@/contexts/TranslationContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutContent = () => {
  const { t, language } = useTranslation();
  
  const teamMembers = [
    {
      name: "John Kamau",
      role: language === 'sw' ? "Mkurugenzi Mkuu" : "Managing Director",
      description: language === 'sw' 
        ? "Kwa uzoefu wa miaka 15+ katika sekta ya magari, John anaongoza maono yetu ya kubadilisha mfumo wa vifaa vya magari nchini Kenya."
        : "With over 15 years in the automotive industry, John leads our vision to transform Kenya's automotive parts supply chain.",
      email: "john@roadbuck.co.ke",
      phone: "+254 700 123 456"
    },
    {
      name: "Sarah Wanjiku", 
      role: language === 'sw' ? "Mkuu wa Uendeshaji" : "Head of Operations",
      description: language === 'sw'
        ? "Sarah anahakikisha uendeshaji mzuri katika mahali petu pote, akichangia miaka ya uzoefu wa logistics na mfumo wa usambazaji."
        : "Sarah ensures smooth operations across all our locations, bringing 10 years of logistics and supply chain expertise.",
      email: "sarah@roadbuck.co.ke", 
      phone: "+254 700 123 457"
    },
    {
      name: "David Ochieng",
      role: language === 'sw' ? "Mkurugenzi wa Kiufundi" : "Technical Director", 
      description: language === 'sw'
        ? "David anaongoza timu yetu ya kiufundi kwa maarifa makuu ya mifumo ya magari na utangamano wa vifaa."
        : "David leads our technical team with deep knowledge of automotive systems and parts compatibility.",
      email: "david@roadbuck.co.ke",
      phone: "+254 700 123 458"
    },
    {
      name: "Grace Njeri",
      role: language === 'sw' ? "Meneja wa Uhusiano wa Wateja" : "Customer Relations Manager",
      description: language === 'sw'
        ? "Grace anahakikisha kila mteja anapokea huduma bora na msaada katika safari yao nasi."
        : "Grace ensures every customer receives exceptional service and support throughout their journey with us.",
      email: "grace@roadbuck.co.ke", 
      phone: "+254 700 123 459"
    }
  ];
  
  const values = [
    {
      title: language === 'sw' ? "Uhakikisho wa Ubora" : "Quality Assurance",
      description: language === 'sw'
        ? "Tunachagua tu vifaa halisi na vya ubora wa juu kutoka kwa wazalishaji wanaotambuliwa ulimwenguni."
        : "We source only genuine and high-quality parts from trusted manufacturers worldwide.",
      icon: "🛡️"
    },
    {
      title: language === 'sw' ? "Usafirishaji wa Kuaminika" : "Reliable Delivery", 
      description: language === 'sw'
        ? "Usafirishaji wa haraka na salama katika kaunti zote 47 za Kenya kupitia mtandao wetu wa logistics."
        : "Fast and secure delivery across all 47 counties in Kenya through our logistics network.",
      icon: "🚚"
    },
    {
      title: language === 'sw' ? "Mteja wa Kwanza" : "Customer First",
      description: language === 'sw' 
        ? "Timu yetu yenye uzoefu inatoa ushauri wa kitaalamu na huduma ya kibinafsi kwa kila mteja."
        : "Our experienced team provides expert advice and personalized service to every customer.",
      icon: "👥"
    },
    {
      title: language === 'sw' ? "Athari za Kijamii" : "Local Impact",
      description: language === 'sw'
        ? "Kuunga mkono sekta ya magari ya Kenya na kuchangia ukuaji wa kiuchumi kitaifa."
        : "Supporting Kenya's automotive industry and contributing to economic growth nationwide.",
      icon: "🌍"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary to-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'sw' ? "Kuhusu ROADBUCK Kenya" : "About ROADBUCK Kenya"}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'sw' 
              ? "Mshirika wako wa kuaminika kwa ubora wa magari nchini Kenya"
              : "Your trusted partner for automotive excellence in Kenya"
            }
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Story and Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border">
            <CardHeader>
              <CardTitle className="text-primary text-xl">
                {language === 'sw' ? "Hadithi Yetu" : "Our Story"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'sw'
                  ? "ROADBUCK Kenya ilianzishwa kwa dhamira ya kutoa vifaa vya ubora wa juu vya magari na vipengele kwa wamiliki wa magari kote Kenya. Tunaelewa umuhimu wa usafirishaji wa kutegemewa katika uchumi wa Kenya unaokua, na tumejitolea kuweka magari yako yakiendesheka vizuri."
                  : "ROADBUCK Kenya was founded with a mission to provide high-quality automotive parts and accessories to vehicle owners across Kenya. We understand the importance of reliable transportation in Kenya's growing economy, and we're committed to keeping your vehicles running smoothly."
                }
              </p>
            </CardContent>
          </Card>
          
          <Card className="border">
            <CardHeader>
              <CardTitle className="text-primary text-xl">
                {language === 'sw' ? "Dhamira Yetu" : "Our Mission"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'sw'
                  ? "Kuwa msambazaji mkuu wa Kenya wa vifaa vya ubora wa magari, kutoa huduma bora na thamani kwa wateja wetu huku tukiunga mkono ukuaji wa sekta ya magari ya Kenya."
                  : "To be Kenya's leading supplier of quality automotive parts, providing exceptional service and value to our customers while supporting the growth of Kenya's automotive industry."
                }
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'sw' ? "Timu Yetu" : "Meet Our Team"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'sw' 
                ? "Wataalamu wenye shauku nyuma ya ROADBUCK Kenya"
                : "The passionate professionals behind ROADBUCK Kenya"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">👤</span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>📧 {member.email}</p>
                    <p>📞 {member.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'sw' ? "Maadili Yetu" : "Our Values"}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <TranslationProvider>
      <AboutContent />
    </TranslationProvider>
  );
};

export default About;