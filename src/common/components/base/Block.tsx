import { clsx } from "clsx";

type BlockProps = {
  blockStyles?: string;
  children?: React.ReactNode;
  hiddenInMobile?: boolean;
  hiddenInDesktop?: boolean;
  hiddenInTablet?: boolean;
  isFullWidth?: boolean;
  // maxWidth?: number;
  // paddingXSmallScreen?: number;
};

const Block: React.FC<BlockProps> = ({
  blockStyles = "",
  children,
  hiddenInMobile,
  hiddenInDesktop,
  hiddenInTablet,
  isFullWidth,
  // maxWidth,
  // paddingXSmallScreen = PADDING_WIDTH_SMALL_SCREEN,
}) => {
  // const defaultMaxWidth = `max-w-[${maxWidth}px]`;
  // const defaultXSmallScreen = `px-[${paddingXSmallScreen}px]`;
  return (
    <section
      className={`m-auto ${clsx({
        hideInMobile: hiddenInMobile,
        hideInTablet: hiddenInTablet,
        hideInDesktop: hiddenInDesktop,
        "w-[100%]": isFullWidth,
        "px-primary": !isFullWidth,
        "xl:px-0": true,
        [blockStyles]: typeof blockStyles === "string",
      })}
          `}
    >
      <div
        className={`h-full ${clsx({
          "max-w-primary": !isFullWidth,
          "mx-auto": true,
        })}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Block;
