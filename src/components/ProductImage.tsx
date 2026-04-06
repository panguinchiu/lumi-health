'use client';

import Image from 'next/image';

const productImages: Record<string, { src: string; alt: string }> = {
  'vitamin-d3-5000': {
    src: '/images/products/vitamin-d3-5000.jpg',
    alt: '高效維生素 D3 5000IU',
  },
  'omega3-fish-oil': {
    src: '/images/products/omega3-fish-oil.jpg',
    alt: '高濃度 rTG Omega-3 魚油',
  },
  'probiotic-30b': {
    src: '/images/products/probiotic-30b.jpg',
    alt: '300億活菌腸道益生菌',
  },
  'magnesium-glycinate': {
    src: '/images/products/magnesium-glycinate.jpg',
    alt: '甘胺酸鎂 400mg',
  },
  'vitamin-b-complex': {
    src: '/images/products/vitamin-b-complex.jpg',
    alt: '活性 B 群複合配方',
  },
  'coq10-ubiquinol': {
    src: '/images/products/coq10-ubiquinol.jpg',
    alt: 'CoQ10 還原型輔酶 Q10',
  },
  'zinc-picolinate': {
    src: '/images/products/zinc-picolinate.jpg',
    alt: '吡啶甲酸鋅 30mg',
  },
  'curcumin-complex': {
    src: '/images/products/curcumin-complex.jpg',
    alt: '薑黃素複方 BCM-95',
  },
};

const defaultImage = {
  src: '/images/products/vitamin-d3-5000.jpg',
  alt: '保健食品',
};

export default function ProductImage({
  productId,
  className = '',
}: {
  productId: string;
  className?: string;
}) {
  const img = productImages[productId] || defaultImage;

  return (
    <div className={`relative w-full h-full overflow-hidden bg-white ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
}
