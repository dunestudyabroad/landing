import dynamic from "next/dynamic";
import Count from "@/components/counter/counts";
import DuneSuccessSlider from "@/components/DuneSuccessSlider/DuneSuccessSlider";
import ExpertCounselling from "@/components/ExpertCounselling/ExpertCounselling";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Layout from "@/components/Layout/Layout";
import UsaCard from "@/components/TopCountries/TopCountries";
import UniversityPartners from "@/components/UniversityPartners/UniversityPartners";
import { WhyChooseSection } from "@/components/WhyChooseSection/WhyChooseSection";
import { testimonials } from "@/data/testimonials";

// ✅ Lazy-loaded components with optional fallback
const CertifiedExelence = dynamic(
  () => import("@/components/CertifiedExelence/CertifiedExelence"),
  { loading: () => <p>Loading Certified Excellence...</p> }
);

const TestimonialGrid = dynamic(
  () => import("@/TestimonialsGrid/TestimonialsGrid"),
  { loading: () => <p>Loading Testimonials...</p> }
);

const FormComponent = dynamic(
  () => import("@/components/FormComponent/FormComponent"),
  { loading: () => <p>Loading Form...</p> }
);

const LimitedPeriod = dynamic(
  () => import("@/components/LimitedPeriod/LimitedPeriod"),
  { loading: () => <p>Loading Offer...</p> }
);

export default function Home() {
  return (
    <Layout>
      <section>
        <HeroBanner />
      </section>
      <section>
        <ExpertCounselling />
      </section>
      <section>
        <Count />
      </section>
      <section>
        <WhyChooseSection />
      </section>
      <section>
        <UsaCard />
      </section>
      <section>
        <UniversityPartners />
      </section>
      <section>
        <DuneSuccessSlider />
      </section>
      <section>
        <CertifiedExelence />
      </section>
      <section>
        <TestimonialGrid testimonials={testimonials} />
      </section>
      <section id="form-section">
        <FormComponent />
      </section>
      <section>
        <LimitedPeriod />
      </section>
    </Layout>
  );
}
