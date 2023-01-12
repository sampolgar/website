import Image from 'next/image';

const callout1 = {
  name: 'Desk and Office',
  description: 'Work from home accessories',
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
  imageAlt:
    'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
  href: 'hello world',
};

const callouts2 = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
];

const callouts3 = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export function OneImage(props) {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl py-3 sm:py-6 lg:max-w-none lg:py-6'>
        <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
          <Image
            className='h-full w-full object-cover object-center'
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
        </div>
        <h3 className='mt-6 text-sm text-gray-500'>
          <span className='absolute inset-0' />
          {props.caption}
        </h3>
      </div>
    </div>
  );
}

export function TwoImages({ images }) {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl py-3 sm:py-6 lg:max-w-none lg:py-6'>
        <div className='mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0'>
          {images.map((image) => (
            <div key={image.name} className='group relative'>
              <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <Image
                  className='h-full w-full object-cover object-center'
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </div>
              <h3 className='mt-6 text-sm text-gray-500'>
                <span className='absolute inset-0' />
                {image.caption}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ThreeImages({ images }) {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl py-3 sm:py-6 lg:max-w-none lg:py-6'>
        <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
          {images.map((image) => (
            <div key={image.name} className='group relative'>
              <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                <Image
                  className='h-full w-full object-cover object-center'
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </div>
              <h3 className='mt-6 text-sm text-gray-500'>
                <span className='absolute inset-0' />
                {image.caption}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
