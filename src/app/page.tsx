"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import { CheckSquare, Scissors, Tag } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Anasayfa",
          id: "hero",
        },
        {
          name: "Kurucular",
          id: "team",
        },
        {
          name: "Hizmetler",
          id: "process",
        },
        {
          name: "Ürünler",
          id: "products",
        },
        {
          name: "İletişim",
          id: "contact",
        },
      ]}
      brandName="NEWMODA TEXTILE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Fikirlerinizi Giydiriyoruz: NEWMODA TEXTILE ile Anahtar Teslim Üretim"
      description="Kumaş seçiminden kalıp hazırlamaya, baskıdan paketlemeye kadar tüm süreçleri markanıza özel yönetiyoruz."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-sewing-machine_23-2148898079.jpg",
          imageAlt: "Üretim Süreci 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/working-with-team-about-new-dress_329181-14324.jpg",
          imageAlt: "Üretim Süreci 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-owner-working_23-2148828334.jpg",
          imageAlt: "Üretim Süreci 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-tailoring-studio-with-sewing-machine-garments_23-2148834125.jpg",
          imageAlt: "Üretim Süreci 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-servant-ironing-clothing_23-2149530868.jpg",
          imageAlt: "Üretim Süreci 5",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-patterns_23-2148903486.jpg",
          imageAlt: "Showroom 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-different-threads-with-copy-space_23-2148876423.jpg",
          imageAlt: "Showroom 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-cutter-sewing-factory-male-hands-close-up_1303-15849.jpg",
          imageAlt: "Showroom 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/creative-atelier-shop-workspace_482257-95822.jpg",
          imageAlt: "Showroom 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-garage-sale_23-2150574511.jpg",
          imageAlt: "Showroom 5",
        },
      ]}
      buttons={[
        {
          text: "Üretim Hakkında Bilgi Alın",
          href: "https://wa.me/905330546773?text=Merhaba%20NEWMODA%20TEXTİLE%20ile%20üretim%20hakkında%20bilgi%20almak%20istiyorum.",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-bearded-hipster-glasses-wearing-casual_613910-12290.jpg",
          alt: "Ekip Üyesi 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-businessman-black-wall_176420-3460.jpg",
          alt: "Ekip Üyesi 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-confident-man_176474-85919.jpg",
          alt: "Ekip Üyesi 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-confident-businessman-glasses-speaking-beige-wall_176420-129.jpg",
          alt: "Ekip Üyesi 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg",
          alt: "Ekip Üyesi 5",
        },
      ]}
      avatarText="100+ Başarılı Proje"
      marqueeItems={[
        {
          type: "text",
          text: "KALİTE",
        },
        {
          type: "text",
          text: "GÜVEN",
        },
        {
          type: "text",
          text: "HIZ",
        },
        {
          type: "text",
          text: "SÜRDÜRÜLEBİLİRLİK",
        },
        {
          type: "text",
          text: "İNOVASYON",
        },
      ]}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "t1",
          name: "NURHAN YEŞİLBAĞCIYAN",
          role: "Üretim Direktörü",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-thinking-about-business-while-holding-hand-chin-isolated-dark-background_613910-6615.jpg",
          imageAlt: "Nurhan Yeşilbağcıyan",
        },
        {
          id: "t2",
          name: "JİLBER YEŞİLBAĞCIYAN",
          role: "Genel Müdür",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg",
          imageAlt: "Jilber Yeşilbağcıyan",
        },
      ]}
      title="Kurucularımız ve Tecrübemiz"
      description="Avrupa standartlarında üretim disiplini ve stratejik yönetim gücü."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Kumaş Tedariki ve Kalıp",
          description: "Markanız için en doğru kumaş seçimi ve hassas kalıp hazırlığı.",
          bentoComponent: "reveal-icon",
          icon: Scissors,
          imageSrc: "http://img.b2bpic.net/free-photo/old-craftsman-trainee-working_482257-79678.jpg",
          imageAlt: "textile fabric quality inspection",
        },
        {
          title: "Üretim ve Dikim",
          description: "Hassas kesimden profesyonel dikim aşamalarına kusursuz işçilik.",
          bentoComponent: "reveal-icon",
          icon: Tag,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-sewing-machine_23-2148898079.jpg",
          imageAlt: "textile fabric quality inspection",
        },
        {
          title: "Kalite ve Paketleme",
          description: "Ütüleme, son kontrol ve etiketleme sonrası teslimata hazır hale getirme.",
          bentoComponent: "reveal-icon",
          icon: CheckSquare,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-thinking-about-business-while-holding-hand-chin-isolated-dark-background_613910-6615.jpg",
          imageAlt: "textile fabric quality inspection",
        },
      ]}
      title="Full Package Üretim Sürecimiz"
      description="Hayalinizdeki ürünü belirtin, gerisini biz halledelim."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "Modelhane",
          title: "Tasarımlarınızın başlangıç noktası.",
          description: "Detaylara önem veren uzman yaklaşım.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-repairing-clothes_23-2150746451.jpg",
        },
        {
          id: "m2",
          value: "Kesim Atölyesi",
          title: "Hassas üretim disiplini.",
          description: "Mükemmel kesim teknolojileri.",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-designer-working-her-workshop-alone_23-2148877343.jpg",
        },
        {
          id: "m3",
          value: "Dikiş Hattı",
          title: "Profesyonel işçilik.",
          description: "Avrupa standartlarında üretim.",
          imageSrc: "http://img.b2bpic.net/free-photo/sewing-machine-accessories-workdesk-shop_23-2147874993.jpg",
        },
        {
          id: "m4",
          value: "Ütü ve Paketleme",
          title: "Son kontroller ve etiketleme.",
          description: "Teslimata hazır kusursuz ürünler.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-choosing-tie-shirt_1098-21878.jpg",
        },
        {
          id: "m5",
          value: "Showroom",
          title: "Ürünlerimizi inceleyin.",
          description: "Kurumsal ve profesyonel ortam.",
          imageSrc: "http://img.b2bpic.net/free-photo/various-type-fabric-clothes-shop_23-2148175735.jpg",
        },
        {
          id: "m6",
          value: "Yönetim Ofisi",
          title: "Operasyonel güç merkezi.",
          description: "Kurumsal stratejiler.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2150543693.jpg",
        },
      ]}
      title="Fabrikamızdan Görüntüler"
      description="Üretim birimlerimiz ve yönetim ofisimizden detaylar."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Pamuklu Polo Yaka",
          price: "100% Pamuk - 200 GSM",
          imageSrc: "http://img.b2bpic.net/free-photo/elements-fashion-designing-studio_23-2150407927.jpg",
        },
        {
          id: "p2",
          name: "Viskon Bluz",
          price: "Viskon - 150 GSM",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-manufacturing-clothes_23-2149007429.jpg",
        },
        {
          id: "p3",
          name: "Keten Pantolon",
          price: "Keten - 220 GSM",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-christmas-wrapping-process_23-2148332560.jpg",
        },
        {
          id: "p4",
          name: "Spor Sweatshirt",
          price: "Pamuk-Polyester - 300 GSM",
          imageSrc: "http://img.b2bpic.net/free-photo/essential-elements-fashion-design-studio_23-2150414765.jpg",
        },
        {
          id: "p5",
          name: "Dokuma Gömlek",
          price: "Poplin - 120 GSM",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-designers-working-together_52683-98105.jpg",
        },
        {
          id: "p6",
          name: "Örme Elbise",
          price: "Pamuk-Lycra - 180 GSM",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-woman-sewing-cloth-by-hand-with-embroidery-set-wooden-table-people-handmade-diy-housework-concept_1150-13528.jpg",
        },
      ]}
      title="Ürün Portföyümüz"
      description="Kumaş tipi ve teknik detaylarıyla sunduğumuz kalite."
    />
  </div>

  <div id="global" data-section="global">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Almanya",
        "İngiltere",
        "Amerika",
        "Hollanda",
        "Fransa",
        "Belçika",
        "İtalya",
      ]}
      title="Global Erişim"
      description="Dünya çapında birçok ülkeye ihracat yapıyoruz."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="İletişim"
      title="Sizinle Çalışmak İçin Hazırız"
      description="Üretim süreçlerimiz ve hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Adres: Tevfikbey Mah. Küçük Sok. No:1/A Küçükçekmece/İST",
            },
            {
              label: "Çalışma Saatleri: Hafta içi 08:30 – 18:00",
            },
          ],
        },
      ]}
      logoText="NEWMODA TEXTILE"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
