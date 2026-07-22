import type { Metadata, Viewport } from 'next';
import { organizationJsonLd, personJsonLd, webSiteJsonLd, jsonLdScriptProps } from './structured-data';
import '../src/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mrecai.com'),
  title: 'AI Consulting, Software Development & Marketing | MRECAI',
  description:
    'Premier AI consulting and software development firm in NYC. Custom AI solutions, web and mobile apps, digital marketing, plus tax and insurance support.',
  authors: [{ name: 'MRECAI' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'MRECAI',
    locale: 'en_US',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'New York',
    'geo.position': '40.7831;-73.9712',
    ICBM: '40.7831, -73.9712',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00A8E8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script {...jsonLdScriptProps(organizationJsonLd)} />
        <script {...jsonLdScriptProps(personJsonLd)} />
        <script {...jsonLdScriptProps(webSiteJsonLd)} />
      </head>
      <body>
        <noscript>
          <div style={{ padding: 40, fontFamily: 'Arial, sans-serif', maxWidth: 1200, margin: '0 auto' }}>
            <h1>MRECAI</h1>
            <p>
              <strong>Full-Service Professional Services Firm</strong>
            </p>
            <p>
              Phone: <a href="tel:+19297022818">+1-929-702-2818</a> | Email:{' '}
              <a href="mailto:Matthew@MRECAI.com">Matthew@MRECAI.com</a>
            </p>
            <p>Address: 11 W Mill Dr, Great Neck, NY 11021</p>

            <h2>Our Services</h2>
            <ul>
              <li>
                <strong>Business Consulting:</strong> Strategic planning, financial analysis, and operational
                optimization
              </li>
              <li>
                <strong>Insurance Services:</strong> Personal and commercial insurance coverage and risk management
              </li>
              <li>
                <strong>Tax Services:</strong> Tax preparation, planning, and strategy for individuals and businesses
              </li>
              <li>
                <strong>AI Automation:</strong> AI implementation, process automation, and technology integration
              </li>
              <li>
                <strong>Investment Management:</strong> Portfolio management and wealth planning
              </li>
              <li>
                <strong>Estate Consulting:</strong> Estate planning and asset protection
              </li>
              <li>
                <strong>Digital Marketing:</strong> SEO, social media, and digital growth strategies
              </li>
            </ul>

            <h2>About Us</h2>
            <p>
              MRECAI is a full-service professional services firm that integrates finance, tax,
              insurance, and technology under one roof. Founded in 2024, we serve small to mid-sized enterprises
              (SMEs) by eliminating operational silos and ensuring that financial health, asset protection, and growth
              technologies work in perfect synchronization.
            </p>

            <h2>Why Choose MRE?</h2>
            <ul>
              <li>One partner instead of five separate vendors</li>
              <li>Full-service integration (finance + tax + insurance + tech + AI)</li>
              <li>50+ years of insurance expertise through Grober Imbey partnership</li>
              <li>AI-first approach to business automation</li>
              <li>Risk management combined with technology implementation</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              Book a free consultation: <a href="https://mrecai.com/book-now">https://mrecai.com/book-now</a>
            </p>
            <p>
              Call us: <a href="tel:+19297022818">+1-929-702-2818</a>
            </p>
            <p>
              Email: <a href="mailto:Matthew@MRECAI.com">Matthew@MRECAI.com</a>
            </p>

            <p>
              <em>
                This site requires JavaScript to be enabled for the full experience. Please enable JavaScript in your
                browser settings.
              </em>
            </p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
