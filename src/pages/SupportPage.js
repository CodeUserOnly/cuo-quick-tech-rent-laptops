import React, { useState } from 'react';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Quick Tech Rent support. I'm here to help you with any questions about laptop rentals. How can I assist you today?",
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const faqCategories = [
    {
      title: "Rental Process",
      questions: [
        {
          question: "How long can I rent a laptop for?",
          answer: "You can rent laptops for a minimum of 1 day and a maximum of 30 days. For longer rental periods, please contact our support team for custom arrangements."
        },
        {
          question: "What's the minimum rental period?",
          answer: "The minimum rental period is 1 day. We offer flexible options to suit your needs, whether it's for a short project or extended use."
        },
        {
          question: "Can I extend my rental period?",
          answer: "Yes! You can extend your rental period as long as the laptop hasn't been booked by another customer. Extensions can be requested through your dashboard or by contacting support."
        }
      ]
    },
    {
      title: "Delivery & Return",
      questions: [
        {
          question: "How fast is delivery?",
          answer: "We offer same-day delivery for orders placed before 2 PM in most metropolitan areas. Standard delivery is next business day. Delivery times may vary based on your location."
        },
        {
          question: "What are your delivery areas?",
          answer: "We currently deliver to major cities across the India. During checkout, you can enter your address to check availability in your area."
        },
        {
          question: "How do I return the laptop?",
          answer: "We provide a prepaid return shipping label. Simply pack the laptop in the original packaging, attach the label, and schedule a pickup or drop it at any authorized shipping location."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and cash on delivery in select areas. Online payment options are secure and encrypted."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! The price you see is what you pay. This includes delivery, basic insurance, and standard support. Additional services like premium support or extra insurance are clearly listed as optional."
        },
        {
          question: "Do you offer discounts for long-term rentals?",
          answer: "Yes! We offer discounted rates for rentals longer than 7 days. Contact our sales team for custom quotes on extended rental periods."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "What if the laptop has technical issues?",
          answer: "We thoroughly test all laptops before shipping. If you encounter any issues, contact our 24/7 support team immediately. We'll troubleshoot remotely or arrange a replacement if needed."
        },
        {
          question: "Do you provide technical setup assistance?",
          answer: "Yes! Our support team can assist with basic setup and configuration. We also provide setup guides for all our laptop models."
        },
        {
          question: "What software is included?",
          answer: "All laptops come with Windows 11/macOS pre-installed, plus essential software like Microsoft Office, antivirus protection, and productivity tools. Specific software requirements can be arranged upon request."
        }
      ]
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our support team will get back to you within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setChatMessages([...chatMessages, userMessage]);
      setNewMessage('');

      // Simulate auto-reply
      setTimeout(() => {
        const responses = [
          "I understand. Let me check that for you.",
          "Thanks for sharing that information. Our team can help with that.",
          "I'll connect you with a specialist who can assist further.",
          "That's a great question! Let me provide you with the details."
        ];
        
        const autoReply = {
          id: chatMessages.length + 2,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: 'support',
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, autoReply]);
      }, 2000);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center mb-5">
            <h1>Support Center</h1>
            <p className="lead">We're here to help you 24/7 with any questions or issues</p>
          </div>
        </div>
      </div>

      {/* Quick Help Cards */}
      <div className="row mb-5">
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100 border-primary">
            <div className="card-body">
              <div className="text-primary mb-3">
                <i className="fas fa-headset fa-2x"></i>
              </div>
              <h5>24/7 Live Chat</h5>
              <p className="text-muted">Get instant help from our support team</p>
              <button 
                className="btn btn-primary"
                onClick={() => setShowChat(true)}
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100 border-success">
            <div className="card-body">
              <div className="text-success mb-3">
                <i className="fas fa-phone fa-2x"></i>
              </div>
              <h5>Phone Support</h5>
              <p className="text-muted">Speak directly with our experts</p>
              <a href="tel:+919769602148" className="btn btn-success">
                Call Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100 border-info">
            <div className="card-body">
              <div className="text-info mb-3">
                <i className="fas fa-envelope fa-2x"></i>
              </div>
              <h5>Email Support</h5>
              <p className="text-muted">Get detailed responses within hours</p>
              <a href="mailto:quicktechrent@gmail.com" className="btn btn-info">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => setActiveTab('faq')}
              >
                <i className="fas fa-question-circle me-2"></i>
                FAQs
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveTab('contact')}
              >
                <i className="fas fa-envelope me-2"></i>
                Contact Form
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'resources' ? 'active' : ''}`}
                onClick={() => setActiveTab('resources')}
              >
                <i className="fas fa-book me-2"></i>
                Resources
              </button>
            </li>
          </ul>

          <div className="tab-content mt-4">
            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div>
                <h3 className="mb-4">Frequently Asked Questions</h3>
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-5">
                    <h4 className="text-primary mb-3">{category.title}</h4>
                    <div className="accordion" id={`accordion${categoryIndex}`}>
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${categoryIndex}${faqIndex}`}
                            >
                              {faq.question}
                            </button>
                          </h2>
                          <div
                            id={`collapse${categoryIndex}${faqIndex}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#accordion${categoryIndex}`}
                          >
                            <div className="accordion-body">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Form Tab */}
            {activeTab === 'contact' && (
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="mb-4">Contact Our Support Team</h3>
                      <form onSubmit={handleContactSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Full Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={contactForm.name}
                              onChange={handleContactChange}
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={contactForm.email}
                              onChange={handleContactChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Subject *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            value={contactForm.subject}
                            onChange={handleContactChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Message *</label>
                          <textarea
                            className="form-control"
                            name="message"
                            rows="6"
                            value={contactForm.message}
                            onChange={handleContactChange}
                            placeholder="Please describe your issue or question in detail..."
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div>
                <h3 className="mb-4">Helpful Resources</h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-download text-primary me-2"></i>
                          Setup Guides
                        </h5>
                        <p className="card-text">Step-by-step guides for setting up your rented laptop and software.</p>
                        <div className="mt-3">
                          <button className="btn btn-outline-primary btn-sm me-2">Windows Guide</button>
                          <button className="btn btn-outline-primary btn-sm me-2">macOS Guide</button>
                          <button className="btn btn-outline-primary btn-sm">Software Setup</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-video text-success me-2"></i>
                          Video Tutorials
                        </h5>
                        <p className="card-text">Watch video tutorials for common tasks and troubleshooting.</p>
                        <div className="mt-3">
                          <button className="btn btn-outline-success btn-sm me-2">Getting Started</button>
                          <button className="btn btn-outline-success btn-sm me-2">Troubleshooting</button>
                          <button className="btn btn-outline-success btn-sm">Advanced Features</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-file-alt text-info me-2"></i>
                          Documentation
                        </h5>
                        <p className="card-text">Comprehensive documentation for all our services and policies.</p>
                        <div className="mt-3">
                          <button className="btn btn-outline-info btn-sm me-2">Rental Policy</button>
                          <button className="btn btn-outline-info btn-sm me-2">Terms of Service</button>
                          <button className="btn btn-outline-info btn-sm">Privacy Policy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="fas fa-tools text-warning me-2"></i>
                          Troubleshooting
                        </h5>
                        <p className="card-text">Common issues and their solutions for quick problem resolution.</p>
                        <div className="mt-3">
                          <button className="btn btn-outline-warning btn-sm me-2">WiFi Issues</button>
                          <button className="btn btn-outline-warning btn-sm me-2">Performance</button>
                          <button className="btn btn-outline-warning btn-sm">Software Problems</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card bg-light">
            <div className="card-body">
              <h4 className="mb-4">Other Ways to Reach Us</h4>
              <div className="row">
                <div className="col-md-3 text-center mb-3">
                  <div className="text-primary mb-2">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                  <h6>Email</h6>
                  <p className="mb-1">quicktechrent@gmail.com</p>
                  <small className="text-muted">Response within 2 hours</small>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <div className="text-success mb-2">
                    <i className="fas fa-phone fa-2x"></i>
                  </div>
                  <h6>Phone</h6>
                  <p className="mb-1">+91 9769602148</p>
                  <small className="text-muted">24/7 available</small>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <div className="text-info mb-2">
                    <i className="fas fa-clock fa-2x"></i>
                  </div>
                  <h6>Business Hours</h6>
                  <p className="mb-1">Mon-Fri: 9AM-6PM IST</p>
                  <p className="mb-1">Sat: 10AM-4PM IST</p>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <div className="text-warning mb-2">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <h6>Address</h6>
                  <p className="mb-1">123 Tech Street</p>
                  <p className="mb-1">Silicon Valley, Mumbai 400042</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Modal */}
      {showChat && (
        <div className="modal fade show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  <i className="fas fa-headset me-2"></i>
                  Live Chat Support
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white"
                  onClick={() => setShowChat(false)}
                ></button>
              </div>
              <div className="modal-body" style={{height: '400px', overflowY: 'auto'}}>
                {chatMessages.map(message => (
                  <div 
                    key={message.id} 
                    className={`d-flex mb-3 ${
                      message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'
                    }`}
                  >
                    <div 
                      className={`p-3 rounded ${
                        message.sender === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-light border text-dark'
                      }`}
                      style={{ maxWidth: '70%' }}
                    >
                      {message.text}
                      <div 
                        className={`small ${
                          message.sender === 'user' ? 'text-white-50' : 'text-muted'
                        } mt-1`}
                      >
                        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <form onSubmit={handleSendMessage} className="w-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;