import React from "react";

const MainFooterAdd = () => {
  return (
    <div className=" flex flex-col gap-3 z-20 text-center">
      <h4 className="text-[#FFFFFF] text:[16px] md:text-[18px] font-semibold h-[62px] flex items-center">
        Bản đồ chỉ dẫn
      </h4>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.1892622075375!2d105.8940112758421!3d21.065101786528285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9bf82246d17%3A0xe6805e50374c35cd!2sGoGroup!5e0!3m2!1svi!2s!4v1705647167511!5m2!1svi!2s"
        width="100%"
        height="230"
        // style="border:0;"
        // allowfullscreen=""
        allowFullScreen
        loading="lazy"

        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MainFooterAdd;
