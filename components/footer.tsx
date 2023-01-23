import { ThemeSwitch } from 'nextra-theme-docs';

export function Footer() {
  return (
    <>
      <div className='bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]'>
        <div className='absolute top-0 h-16 w-full -translate-y-full '>
          <div className='mx-auto max-w-[90rem] py-2 px-4 flex gap-2'>
            <div className='mr-2'>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
