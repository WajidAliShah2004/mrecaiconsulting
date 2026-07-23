// Comprehensive AI Knowledge Base for MRECAI
// This mirrors the frontend knowledge base for consistent responses

interface KnowledgeBaseResponse {
  getResponse(message: string): string;
}

class KnowledgeBase implements KnowledgeBaseResponse {
  getResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    // Greetings
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening)$/)) {
      return 'Hello! 👋 Welcome to MRECAI. I\'m here to help you with:\n• Insurance quotes & coverage\n• Business consulting\n• Scheduling consultations\n• Answering questions\n\nWhat can I help you with today?';
    }
    
    // Hours/Availability
    if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('available') || lowerMessage.includes('when')) {
      return 'We offer 24/7 service support! 🕐\n\nYou can reach us anytime:\n📞 Phone: 929-919-3574\n📧 Email: Matthew@MRECAI.com\n📅 Book online: /book-now\n\nOur team is always here to help!';
    }
    
    // Services - General
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('what do you offer')) {
      return 'We offer comprehensive services:\n\n💼 Business Consulting - Strategic planning & growth\n🛡️ Insurance Services - Personal & commercial coverage\n💰 Tax & Accounting - Planning & preparation\n🤖 AI Consulting - Implementation & strategy\n⚙️ Automation - Workflow optimization\n\nVisit /services for detailed information!';
    }
    
    // Insurance - General
    if (lowerMessage.includes('insurance') || lowerMessage.includes('coverage') || lowerMessage.includes('policy')) {
      return 'We offer comprehensive insurance services:\n\n🏠 Homeowners Insurance\n🚗 Auto Insurance (Personal & Commercial)\n🏢 Commercial Insurance\n☂️ Personal Umbrella Coverage\n🏘️ Condo Insurance\n💼 Professional Liability\n\nGet a quote: /intake-forms\nQuestions? Call: 929-919-3574';
    }
    
    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee') || lowerMessage.includes('how much')) {
      return 'Our pricing is customized to your specific needs:\n\n✓ Free initial consultation\n✓ Transparent pricing\n✓ No hidden fees\n✓ Competitive rates\n✓ Flexible payment options\n\nBook a FREE consultation to discuss pricing: /book-now\nOr call us: 929-919-3574';
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return 'Contact us anytime:\n\n📞 Phone: 929-919-3574 (24/7)\n📧 Email: Matthew@MRECAI.com\n🌐 Contact Form: /contact\n📅 Book Consultation: /book-now\n\nWe typically respond within 24 hours!';
    }
    
    // Booking/Appointment
    if (lowerMessage.includes('book') || lowerMessage.includes('appointment') || lowerMessage.includes('schedule') || lowerMessage.includes('consultation') || lowerMessage.includes('meeting')) {
      return 'Schedule a FREE consultation:\n\n📅 Online booking: /book-now\n📞 Call us: 929-919-3574\n📧 Email: Matthew@MRECAI.com\n\nChoose a time that works for you - we\'re flexible and here to help!';
    }
    
    // Quote/Estimate
    if (lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
      return 'Get a personalized quote:\n\n📝 Fill out intake form: /intake-forms\n📞 Call for immediate quote: 929-919-3574\n📅 Book consultation: /book-now\n\nWe\'ll review your needs and provide a customized quote within 24 hours!';
    }
    
    // About Company
    if (lowerMessage.includes('about') || lowerMessage.includes('who are you') || lowerMessage.includes('company')) {
      return 'About MRECAI:\n\n✓ Founded in 2009\n✓ 15+ years of experience\n✓ 500+ satisfied clients\n✓ 98% success rate\n✓ 24/7 service support\n\nWe empower individuals, families, and businesses with expert consulting and insurance solutions.\n\nLearn more: /about';
    }
    
    // Thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! 😊\n\nIs there anything else I can help you with today?\n\nRemember:\n📞 Call: 929-919-3574\n📅 Book: /book-now\n📧 Email: Matthew@MRECAI.com';
    }
    
    // Goodbye
    if (lowerMessage.match(/^(bye|goodbye|see you|talk later)$/)) {
      return 'Thank you for chatting with us! 👋\n\nFeel free to reach out anytime:\n📞 929-919-3574\n📧 Matthew@MRECAI.com\n\nHave a great day!';
    }
    
    // Default fallback
    return 'I\'m not sure about that, but I can connect you with our team! Call us at 929-919-3574 or book a consultation at /book-now for personalized assistance.';
  }
}

export default new KnowledgeBase();
