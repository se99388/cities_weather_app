"use client";
import cx from "clsx";
import * as PopoverBase from "@radix-ui/react-popover";

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
  sideOffset?: number;
  asChild?: boolean;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  top?: number;
  arrow?: boolean;
  className?: string;
};

const Popover = ({
  children,
  content,
  sideOffset = 5,
  asChild = false,
  open,
  setOpen,
  arrow = true,
  className,
}: Props) => (
  <PopoverBase.Root open={open} onOpenChange={setOpen}>
    <PopoverBase.Trigger asChild={asChild}>{children}</PopoverBase.Trigger>
    <PopoverBase.Portal>
      <PopoverBase.Content
        className={cx(
          `
					rounded py-2 px-4
                 bg-gray-300 
                 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] 
                
                 will-change-[transform,opacity] 
                 data-[state=open]:data-[side=top]:animate-slideDownAndFade 
                 data-[state=open]:data-[side=right]:animate-slideLeftAndFade 
                 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade 
                 data-[state=open]:data-[side=left]:animate-slideRightAndFade
					`,
          className
        )}
        sideOffset={sideOffset}
        side={"bottom"}
        align={"center"}
      >
        {content}
        {arrow && <PopoverBase.Arrow className="fill-secondary-60" />}
      </PopoverBase.Content>
    </PopoverBase.Portal>
  </PopoverBase.Root>
);

export default Popover;
