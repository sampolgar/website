import Image from 'next/image';

// export function OneImage(props) {
//   return (
//     <div className='mx-auto max-w-10xl px-4 sm:px-3 lg:px-4'>
//       <div className='mx-auto max-w-2xl py-3 sm:py-6 lg:max-w-none lg:py-6'>
//         <div className='group relative mt-6 lg:grid'>
//           <Image
//             className='max-w-full h-auto object-scale-down object-center'
//             src={props.src}
//             alt={props.alt}
//             width='1000'
//             height='1000'
//           />
//           <h3 className='mt-6 text-sm text-gray-500'>
//             <span className='absolute inset-0' />
//             {props.caption}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function OneImageScaled(props) {
//   return (
//     <figure className='max-w-lg'>
//       <Image
//         className='h-auto max-w-full rounded-lg object-scale-down'
//         src={props.src}
//         alt={props.alt}
//         width='1000'
//         height='1000'
//       />
//       <figcaption className='mt-3 text-sm text-gray-500'>
//         {props.caption}
//       </figcaption>
//     </figure>
//   );
// }
export function OneImage(props) {
  return (
    <div className='mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl'>
      <div className='grid-cols-1  place-content-center'>
        <Image
          className='w-auto select-none bg-white rounded-xl content-center'
          src={props.src}
          alt={props.alt}
          width='1000'
          height='1000'
        />
        <div className='mt-3 text-sm text-gray-500 text-center '>
          {props.caption}
        </div>
      </div>
    </div>
  );
}

export function TwoImagesVertical(props) {
  return (
    <div className='grid gap-4 grid-cols'>
      <div className='mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl'>
        <div className='grid-cols-1  place-content-center'>
          <Image
            className='w-auto select-none bg-white rounded-xl content-center'
            src={props.src}
            alt={props.alt}
            width='1000'
            height='1000'
          />
          <div className='mt-3 text-sm text-gray-500 text-center '>
            {props.caption}
          </div>
        </div>
      </div>
      <div className='mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl'>
        <div className='grid-cols-1  place-content-center'>
          <Image
            className='w-auto select-none bg-white rounded-xl content-center'
            src={props.src2}
            alt={props.alt2}
            width='1000'
            height='1000'
          />
          <div className='mt-3 text-sm text-gray-500 text-center '>
            {props.caption2}
          </div>
        </div>
      </div>
    </div>
  );
}
export function TwoImages(props) {
  return (
    <div className='lg:grid grid gap-4 lg:grid-cols-2 '>
      <div className='mt-6 -mb-4 flex justify-between overflow-hidden rounded-xl'>
        <div className='group relative place-content-center'>
          <Image
            className='h-full w-full select-none rounded-xl content-center object-contain'
            src={props.src}
            alt={props.alt}
            width='1000'
            height='1000'
          />
          <div className='mt-3 text-sm text-gray-500 text-center '>
            {props.caption}
          </div>
        </div>
      </div>
      <div className='mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl'>
        <div className='group relative place-content-center'>
          <Image
            className='h-full w-full select-none rounded-xl content-center object-contain'
            src={props.src2}
            alt={props.alt2}
            width='1000'
            height='1000'
          />
          <div className='mt-3 text-sm text-gray-500 text-center '>
            {props.caption2}
          </div>
        </div>
      </div>
    </div>
  );
}
