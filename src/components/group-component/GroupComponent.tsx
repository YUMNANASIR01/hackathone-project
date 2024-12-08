"use client";

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponentType = {
  className?: string;
  thumbnailImages: string;
  dashiconsadminUsers: string;
  uiscalender: string;
  citag: string;
  wood?: string;
  goingAllInWithMillennialDesign?: string;

  /** Style props */
  adminTextDecoration?: CSSProperties["textDecoration"];
  postDatesFlex?: CSSProperties["flex"];
  postDatesMinWidth?: CSSProperties["minWidth"];
  postTagsFlex?: CSSProperties["flex"];
  postTagsMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  thumbnailImages,
  dashiconsadminUsers,
  uiscalender,
  citag,
  wood,
  goingAllInWithMillennialDesign,
  adminTextDecoration,
  postDatesFlex,
  postDatesMinWidth,
  postTagsFlex,
  postTagsMinWidth,
}) => {
  // Memoize the styles for performance optimization
  const adminStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: adminTextDecoration,
    };
  }, [adminTextDecoration]);

  const postDatesStyle: CSSProperties = useMemo(() => {
    return {
      flex: postDatesFlex,
      minWidth: postDatesMinWidth,
    };
  }, [postDatesFlex, postDatesMinWidth]);

  const postTagsStyle: CSSProperties = useMemo(() => {
    return {
      flex: postTagsFlex,
      minWidth: postTagsMinWidth,
    };
  }, [postTagsFlex, postTagsMinWidth]);

  return (
    <div
      className={`self-stretch h-[794px] flex flex-col items-start justify-start pt-0 px-0 pb-[66px] box-border gap-[17px] max-w-full text-left text-base text-darkgray font-poppins mq450:h-auto mq450:pb-7 mq450:box-border mq1125:pb-[43px] mq1125:box-border ${className}`}
    >
      {/* Thumbnail image container */}
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full">
        <Image
          className="h-[500px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover"
          loading="lazy" // Lazy load image
          width={817}
          height={500}
          alt=""
          src={thumbnailImages} // Pass the thumbnail image
        />
      </div>

      {/* Post details */}
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-3 max-w-full shrink-0">
        <div className="flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[35px] max-w-full mq450:gap-[17px] mq450:flex-wrap">
            {/* Admin details */}
            <div className="flex flex-row items-start justify-start gap-[7px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <Image
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  width={20}
                  height={20}
                  alt=""
                  src="/admin.png"
                />
              </div>
              <div
                className="relative inline-block min-w-[54px]"
                style={adminStyle}
              >
                Admin
              </div>
            </div>

            {/* Post date */}
            <div
              className="flex flex-row items-start justify-start gap-[11px]"
              style={postDatesStyle}
            >
              <Image
                className="h-5 w-5 relative overflow-hidden shrink-0"
                width={20}
                height={20}
                alt=""
                src="/date.png"
              />
              <div className="relative">14 Oct 2022</div>
            </div>

            {/* Post tags */}
            <div
              className="flex flex-row items-start justify-start gap-[7px]"
              style={postTagsStyle}
            >
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/wood.png"
              />
              <div className="relative">{wood}</div>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-11xl text-black">
            <h2 className="m-0 relative text-inherit font-medium font-[inherit] mq800:text-5xl mq450:text-lg">
              {goingAllInWithMillennialDesign}
            </h2>
          </div>
        </div>

        {/* Post content */}
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full text-justify text-mini">
          <div className="flex-1 relative leading-[150%] inline-block max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </div>
        </div>
      </div>

      {/* Read more section */}
      <div className="flex flex-row items-start justify-start py-0 px-[3px] text-justify text-black">
        <div className="h-[37px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-3">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[90px]">
            Read more
          </a>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-[5px]">
            <div className="h-px flex-1 relative border-black border-t-[1px] border-solid box-border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;