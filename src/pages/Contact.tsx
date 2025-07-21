import { Header } from "@/components/Header";
import { TranslationProvider, useTranslation } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactContent = () => {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
   const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(formData.email)) {
      toast({
        title: language === 'sw' ? "Kosa" : "Error",
        description: language === 'sw' 
          ? "Tafadhali ingiza barua pepe sahihi"
          : "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Validate phone if provided
    if (formData.phone && !validatePhone(formData.phone)) {
      toast({
        title: language === 'sw' ? "Kosa" : "Error", 
        description: language === 'sw'
          ? "Tafadhali ingiza nambari ya simu sahihi"
          : "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `*ROADBUCK*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}

*Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/+254745037446?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: language === 'sw' ? "Ujumbe Umeandaliwa" : "Message Prepared",
      description: language === 'sw' 
        ? "WhatsApp imefunguliwa na ujumbe wako. Bonyeza 'Send' kwenye WhatsApp."
        : "WhatsApp opened with your message. Click 'Send' in WhatsApp to complete.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  const handleWhatsApp = () => {
    window.open('https://wa.me/+254745037446', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">{t.contact}</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-primary">
                  {language === 'sw' ? "Tuandikie" : "Send us a Message"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder={language === 'sw' ? "Jina lako" : "Your Name"}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder={language === 'sw' ? "Barua pepe" : "Email Address"}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    placeholder={language === 'sw' ? "Nambari ya simu" : "Phone Number"}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Textarea
                    placeholder={language === 'sw' ? "Ujumbe wako" : "Your Message"}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    required
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                    {language === 'sw' ? "Tuma Ujumbe" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {language === 'sw' ? "Maelezo ya Mawasiliano" : "Contact Information"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p><strong>{language === 'sw' ? "Simu" : "Phone"}:</strong> +254 745 037446</p>
                  <p><strong>{language === 'sw' ? "Barua pepe" : "Email"}:</strong> info@roadbuck.co.ke</p>
                  <p><strong>{language === 'sw' ? "Anwani" : "Address"}:</strong> Nairobi, Kenya</p>
                </CardContent>
              </Card>
              
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                {t.whatsappUs}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <TranslationProvider>
      <ContactContent />
    </TranslationProvider>
  );
};

export default Contact;