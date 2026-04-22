"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
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
        { name: "Anasayfa", id: "hero" },
        { name: "Kurucular", id: "team" },
        { name: "Hizmetler", id: "process" },
        { name: "Ürünler", id: "products" },
        { name: "İletişim", id: "contact" },
      ]}
      brandName="NEWMODA TEXTILE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "gradient-bars" }}
      title="ŞIKLIĞIN ADRESİ NEWMODA TEXTILE"
      description="Kumaş seçiminden kalıp hazırlamaya, baskıdan paketlemeye kadar tüm süreçleri markanıza özel yönetiyoruz."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776853509525-n0x9f3fo.png"
      imageAlt="Üretim Süreci"
      buttons={[{ text: "Üretim Hakkında Bilgi Alın", href: "https://wa.me/905330546773?text=Merhaba%20NEWMODA%20TEXTİLE%20ile%20üretim%20hakkında%20bilgi%20almak%20istiyorum." }]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/studio-portrait-bearded-hipster-glasses-wearing-casual_613910-12290.jpg", alt: "Ekip" },
        { src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-businessman-black-wall_176420-3460.jpg", alt: "Ekip" },
        { src: "http://img.b2bpic.net/free-photo/portrait-young-confident-man_176474-85919.jpg", alt: "Ekip" },
      ]}
      avatarText="100+ Başarılı Proje"
      marqueeItems={[
        { type: "text", text: "KALİTE" },
        { type: "text", text: "GÜVEN" },
        { type: "text", text: "HIZ" },
        { type: "text", text: "SÜRDÜRÜLEBİLİRLİK" },
        { type: "text", text: "İNOVASYON" },
      ]}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        { id: "t1", name: "NURHAN YEŞİLBAĞCIYAN", role: "Üretim Direktörü", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852455925-sjwiykl9.jpg", imageAlt: "Nurhan Yeşilbağcıyan" },
        { id: "t2", name: "JİLBER YEŞİLBAĞCIYAN", role: "Genel Müdür", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852455925-sjwiykl9.jpg", imageAlt: "Jilber Yeşilbağcıyan" },
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
        { title: "Kumaş Tedariki ve Kalıp", description: "Markanız için en doğru kumaş seçimi ve hassas kalıp hazırlığı.", bentoComponent: "reveal-icon", icon: Scissors },
        { title: "Üretim ve Dikim", description: "Hassas kesimden profesyonel dikim aşamalarına kusursuz işçilik.", bentoComponent: "reveal-icon", icon: Tag },
        { title: "Kalite ve Paketleme", description: "Ütüleme, son kontrol ve etiketleme sonrası teslimata hazır hale getirme.", bentoComponent: "reveal-icon", icon: CheckSquare },
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
        { id: "m1", value: "Modelhane", title: "Tasarımlarınızın başlangıç noktası.", description: "Detaylara önem veren uzman yaklaşım.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776850577533-cm0mppv7.png" },
        { id: "m2", value: "Kesim Atölyesi", title: "Hassas üretim disiplini.", description: "Mükemmel kesim teknolojileri.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776851170062-zaln9hhy.png" },
        { id: "m3", value: "Dikiş Hattı", title: "Profesyonel işçilik.", description: "Avrupa standartlarında üretim.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776851128376-r57dc5rr.png" },
        { id: "m4", value: "Ütü ve Paketleme", title: "Son kontroller ve etiketleme.", description: "Teslimata hazır kusursuz ürünler.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776850305171-ij8gji8p.png" },
        { id: "m5", value: "Showroom", title: "Ürünlerimizi inceleyin.", description: "Kurumsal ve profesyonel ortam.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776851106747-mxdd3knl.jpg" },
        { id: "m6", value: "Yönetim Ofisi", title: "Operasyonel güç merkezi.", description: "Kurumsal stratejiler.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776851794719-iqvi078i.png" },
      ]}
      title="Fabrikamızdan Görüntüler"
      description="Üretim birimlerimiz ve yönetim ofisimizden detaylar."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Pamuklu Polo Yaka", price: "100% Pamuk - 200 GSM", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852249313-lj14msxj.jpg" },
        { id: "p2", name: "Viskon Bluz", price: "Viskon - 150 GSM", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852249313-evkt8k9d.jpg" },
        { id: "p3", name: "Keten Pantolon", price: "Keten - 220 GSM", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852249313-5m4bjq0r.jpg" },
        { id: "p4", name: "Spor Sweatshirt", price: "Pamuk-Polyester - 300 GSM", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852249313-89kx9y68.jpg" },
        { id: "p5", name: "Dokuma Gömlek", price: "Poplin - 120 GSM", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852355141-75lzzmz8.jpg" },
        { id: "p6", name: "Örme Elbise", price: "Pamuk-Lycra - 180 GSM", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Chc2qswBE8pMYFiBWnY5G8qpZC/uploaded-1776852364204-50kdav9z.jpg" },
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
        "Almanya", "İngiltere", "Amerika", "Hollanda", "Fransa", "Belçika", "İtalya"]}
      title="Global Erişim"
      description="Dünya çapında birçok ülkeye ihracat yapıyoruz."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="İletişim"
      title="Sizinle Çalışmak İçin Hazırız"
      description="Üretim süreçlerimiz ve hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[{ items: [{ label: "Adres: Tevfikbey Mah. Küçük Sok. No:1/A Küçükçekmece/İST" }, { label: "Çalışma Saatleri: Hafta içi 08:30 – 18:00" }] }]}
      logoText="NEWMODA TEXTILE"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}