'use client';

import Image from 'next/image';

const articleImages: Record<string, { src: string; alt: string }> = {
  'vitamin-d-guide': {
    src: '/images/blog/vitamin-d-guide.png',
    alt: '維生素 D 補充攻略',
  },
  'preventive-medicine-101': {
    src: '/images/blog/preventive-medicine-101.jpg',
    alt: '預防醫學入門',
  },
  'gut-health-microbiome': {
    src: '/images/blog/gut-health-microbiome.jpg',
    alt: '腸道菌相健康',
  },
  'omega3-benefits': {
    src: '/images/blog/omega3-benefits.jpg',
    alt: 'Omega-3 脂肪酸',
  },
  'sleep-optimization': {
    src: '/images/blog/sleep-optimization.jpg',
    alt: '睡眠品質優化',
  },
  'blood-test-reading': {
    src: '/images/blog/blood-test-reading.jpg',
    alt: '血液檢查報告解讀',
  },
};

const defaultImage = {
  src: '/images/blog/preventive-medicine-101.jpg',
  alt: '健康知識',
};

export default function ArticleImage({
  slug,
  className = '',
}: {
  slug: string;
  className?: string;
}) {
  const img = articleImages[slug] || defaultImage;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-surface ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </div>
  );
}
