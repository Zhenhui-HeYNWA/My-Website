import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>

      <SheetContent>
        <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
            />
          </div>
          <Socials
            containerStyles='flex gap-x-4 '
            iconsStyles='text-foreground text-2xl hover:text-primary hover:scale-150 ease-in-out transition-all'
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
