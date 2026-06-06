"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="aurora"
        cardStyle="solid"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Packages",
          id: "#packages",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Organized Habitat"
      button={{
        text: "Get Organized",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="Transform Your Space, Transform Your Life"
      description="Organized Habitat helps you declutter, streamline, and create peaceful environments. Experience the joy of a perfectly organized home with our expert touch."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarah.j",
          testimonial: "Organized Habitat completely changed my home and my mindset! I can finally relax and enjoy my space.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-happy-gorgeous-woman-with-relaxed-smile-spending-nice-time-cafe_273609-9043.jpg",
          imageAlt: "Sarah J.",
        },
        {
          name: "Michael D.",
          handle: "@michael.d",
          testimonial: "Professional, efficient, and truly transformative. My garage has never looked better!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-smiling-cheerfully-pointin-with-thumbs-back_141793-55345.jpg",
          imageAlt: "Michael D.",
        },
        {
          name: "Emily R.",
          handle: "@emily.r",
          testimonial: "Their team brought so much peace and order to our chaotic playroom. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-man-using-tablet-kitchen_23-2147769503.jpg",
          imageAlt: "Emily R.",
        },
        {
          name: "David K.",
          handle: "@david.k",
          testimonial: "Worth every penny. The custom solutions for my home office have boosted my productivity immensely.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-holding-each-other-s-hand_23-2147891266.jpg",
          imageAlt: "David K.",
        },
        {
          name: "Jessica L.",
          handle: "@jessica.l",
          testimonial: "I was overwhelmed, but Organized Habitat made the process seamless and fun. My pantry is a dream!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-playing-poker-with-friends_23-2149276094.jpg",
          imageAlt: "Jessica L.",
        },
      ]}
      testimonialRotationInterval={5000}
      tag="Your Sanctuary Awaits"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Explore Services",
          href: "#services",
        },
        {
          text: "Book a Consultation",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/coffee-time_1098-16186.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-posing_23-2150312849.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",
          alt: "Close-up of positive businesswoman",
        },
      ]}
      avatarText="Over 500 Happy Homes"
      imageSrc="http://img.b2bpic.net/free-photo/potted-plant-floor-new-home_637285-12372.jpg"
      imageAlt="Beautifully organized modern living room"
      showBlur={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="right"
      title="Creating Harmony Through Order"
      description="At Organized Habitat, we believe a well-organized home is the foundation for a well-lived life. Our expert organizers work with you to understand your needs, habits, and vision, delivering personalized solutions that bring lasting order and serenity to your living spaces. We transform clutter into calm, one space at a time."
      tag="Our Philosophy"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Meet Our Team",
          href: "#",
        },
        {
          text: "Our Process",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
      bulletPoints={[
        {
          title: "Personalized Approach",
          description: "Every client receives tailored solutions designed for their unique lifestyle and preferences.",
        },
        {
          title: "Lasting Results",
          description: "We implement systems that are easy to maintain, ensuring your space stays organized long-term.",
        },
        {
          title: "Stress-Free Process",
          description: "From consultation to completion, we handle everything with care, making it a smooth experience.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cheerful-women-collaborating-with-laptop_23-2147668833.jpg"
      imageAlt="Professional home organizer working with a client"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Kitchen & Pantry",
          subtitle: "From cluttered countertops to overflowing pantries, we create efficient and aesthetically pleasing culinary spaces.",
          category: "Home Zones",
          value: "Streamlined",
        },
        {
          id: "f2",
          title: "Closet & Wardrobe",
          subtitle: "Maximize storage and simplify your routine with beautifully organized closets and personalized wardrobe systems.",
          category: "Personal Spaces",
          value: "Effortless",
        },
        {
          id: "f3",
          title: "Home Office & Desk",
          subtitle: "Boost productivity and reduce distractions with a perfectly organized workspace tailored to your professional needs.",
          category: "Work Zones",
          value: "Productive",
        },
        {
          id: "f4",
          title: "Kids Rooms & Play Areas",
          subtitle: "Create functional, fun, and easy-to-maintain spaces where children can thrive and play freely.",
          category: "Family Spaces",
          value: "Joyful",
        },
        {
          id: "f5",
          title: "Garage & Storage Units",
          subtitle: "Transform chaotic storage areas into well-defined, accessible, and highly functional spaces for all your belongings.",
          category: "Utility Areas",
          value: "Spacious",
        },
        {
          id: "f6",
          title: "Downsizing & Relocation",
          subtitle: "Expert assistance with decluttering before a move or organizing a new home to ensure a smooth transition.",
          category: "Life Transitions",
          value: "Seamless",
        },
      ]}
      title="Our Tailored Organization Services"
      description="We offer comprehensive solutions to tackle any organizational challenge, ensuring every corner of your home functions beautifully and efficiently."
      tag="What We Offer"
      tagAnimation="opacity"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sophia Martinez",
          role: "Homeowner",
          company: "Organized Life",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excited-cheerful-blond-girl-rejoicing-camera-with-copy-space-text-promotional-content-near-yellow-background_574295-2365.jpg",
          imageAlt: "Sophia Martinez",
        },
        {
          id: "2",
          name: "Liam Chen",
          role: "Small Business Owner",
          company: "Efficient Space",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/with-bad-attitude-looking-proud-aggressive-pointing-upwards-making-fun-sign-with-hands_1194-632304.jpg",
          imageAlt: "Liam Chen",
        },
        {
          id: "3",
          name: "Olivia White",
          role: "Busy Parent",
          company: "Family Focus",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-attractive-woman-elegant-hotel-cafeteria_657883-397.jpg",
          imageAlt: "Olivia White",
        },
        {
          id: "4",
          name: "Noah Brown",
          role: "Creative Professional",
          company: "Clarity & Co.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-manager-handshaking-with-candidate-after-successful-job-interview-office_637285-6543.jpg",
          imageAlt: "Noah Brown",
        },
        {
          id: "5",
          name: "Ava Garcia",
          role: "Retiree",
          company: "Peaceful Haven",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-smiling-woman-student-talking-teacher-online-via-video-chat-doing-course_1258-281688.jpg",
          imageAlt: "Ava Garcia",
        },
        {
          id: "6",
          name: "Elijah Smith",
          role: "Young Couple",
          company: "New Beginnings",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-adopted-by-couple_23-2149574083.jpg",
          imageAlt: "Elijah Smith",
        },
      ]}
      title="Hear From Our Happy Clients"
      description="Our clients rave about the peace of mind and functional beauty we bring to their homes and lives. Read their stories."
      tag="Client Success"
      tagAnimation="opacity"
    />
  </div>

  <div id="packages" data-section="packages">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Kitchen Harmony",
          price: "Starts at $450",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-cutlery-natural-hair-brush_23-2148678004.jpg",
          imageAlt: "Organized kitchen counter with food prep",
        },
        {
          id: "p2",
          name: "Bedroom Retreat",
          price: "Starts at $500",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956540.jpg",
          imageAlt: "Decluttered bedroom with zen atmosphere",
        },
        {
          id: "p3",
          name: "Playroom Paradise",
          price: "Starts at $400",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-kids-room-decoration-with-toys_23-2149096009.jpg",
          imageAlt: "Organized playroom with toys in storage",
        },
        {
          id: "p4",
          name: "Garage Guru",
          price: "Starts at $600",
          imageSrc: "http://img.b2bpic.net/free-photo/various-tools-spoons-holder-wooden-shelf_23-2148155182.jpg",
          imageAlt: "Organized garage storage system",
        },
        {
          id: "p5",
          name: "Laundry Luxe",
          price: "Starts at $350",
          imageSrc: "http://img.b2bpic.net/free-photo/housewife-woking-home_1157-45524.jpg",
          imageAlt: "Organized laundry room essentials",
        },
        {
          id: "p6",
          name: "Bathroom Bliss",
          price: "Starts at $300",
          imageSrc: "http://img.b2bpic.net/free-photo/skincare-products-neatly-organized-drawer_23-2152029117.jpg",
          imageAlt: "Organized bathroom vanity storage",
        },
      ]}
      title="Our Popular Organization Packages"
      description="Choose from our curated packages or let us create a custom plan to suit your unique needs and budget for any space in your home."
      tag="Signature Solutions"
      tagAnimation="opacity"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "hourly",
          title: "Hourly Rate",
          price: "$95",
          period: "per hour",
          features: [
            "Minimum 3 hours per session",
            "Ideal for small projects or specific areas",
            "Initial 30-min virtual consultation",
          ],
          button: {
            text: "Book Hourly Session",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/books-heart-shape-basket-arranged-shelf-living-room_1170-393.jpg",
          imageAlt: "Organized minimalist storage boxes",
        },
        {
          id: "half-day",
          title: "Half-Day Package",
          price: "$425",
          period: "4-hour session",
          features: [
            "Perfect for a single room or larger area",
            "Includes basic organizing supplies",
            "Follow-up email support for 1 week",
          ],
          button: {
            text: "Select Half-Day",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-jar-close-up_23-2148972904.jpg",
          imageAlt: "Medium sized organized kitchen pantry",
        },
        {
          id: "full-day",
          title: "Full-Day Immersion",
          price: "$800",
          period: "8-hour session",
          features: [
            "Comprehensive transformation for multiple areas",
            "Includes premium organizing supplies",
            "30-day post-project maintenance guide",
            "Priority scheduling",
          ],
          button: {
            text: "Choose Full-Day",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/logistic-center-with-storage-units-close-up_23-2148943353.jpg",
          imageAlt: "Large organized luxurious walk-in closet",
        },
      ]}
      title="Transparent Pricing, Exceptional Value"
      description="Invest in your peace of mind. Our flexible pricing plans are designed to deliver maximum impact for your home organization project, tailored to your scope and needs."
      tag="Flexible Plans"
      tagAnimation="opacity"
      buttons={[
        {
          text: "Get a Custom Quote",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Local Homes Magazine",
        "Neighborhood Review",
        "Urban Living Guide",
        "Home & Garden Insights",
        "Family Lifestyle Blog",
        "Design Collective",
        "Real Estate Pros",
      ]}
      title="Trusted by Homeowners Across the City"
      description="We've helped countless families and individuals create their dream organized spaces, making their homes more functional and serene."
      tag="Our Community"
      tagAnimation="opacity"
      speed={40}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What areas do you organize?",
          content: "We organize all areas of your home, including kitchens, pantries, closets, bedrooms, bathrooms, home offices, playrooms, garages, and more. We also assist with downsizing and relocation.",
        },
        {
          id: "q2",
          title: "How long does a session take?",
          content: "Session lengths vary based on the scope of the project. We offer hourly rates (minimum 3 hours), half-day (4-hour) packages, and full-day (8-hour) immersion sessions. A consultation helps us determine the best fit for you.",
        },
        {
          id: "q3",
          title: "Do I need to be present during the organizing process?",
          content: "While your input is valuable, especially during the decluttering and decision-making phases, you don't need to be present for every moment. We can work independently once a plan is established, but we encourage active participation for the best results.",
        },
        {
          id: "q4",
          title: "What about confidentiality?",
          content: "Client confidentiality is paramount. We treat all client information and home details with the utmost respect and privacy. Your trust is our top priority.",
        },
        {
          id: "q5",
          title: "Do you handle donations and recycling?",
          content: "Yes, as part of our service, we can assist with taking donations to local charities or arranging for recycling of items that no longer serve you.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to common questions about our services, process, and what to expect when you partner with Organized Habitat."
      buttons={[
        {
          text: "Still Have Questions? Contact Us",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Get Started"
      tagIcon={Sparkles}
      tagAnimation="opacity"
      title="Ready to Reclaim Your Space?"
      description="Contact Organized Habitat today for a free consultation and let's start creating your ideal home environment. We're excited to help you achieve your organization goals."
      buttons={[
        {
          text: "Schedule a Consultation",
          href: "mailto:info@organizedhabitat.com",
        },
        {
          text: "Call Us",
          href: "tel:+15551234567",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Kitchen & Pantry",
              href: "#services",
            },
            {
              label: "Closet & Wardrobe",
              href: "#services",
            },
            {
              label: "Home Office",
              href: "#services",
            },
            {
              label: "Full Home Organization",
              href: "#packages",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Approach",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Organized Habitat"
      copyrightText="© 2024 Organized Habitat. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
