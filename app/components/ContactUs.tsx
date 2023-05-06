import React from "react";

function ContactUs() {
  return (
    <div className=" flex items-center justify-center max-w-5xl mx-auto px-5 mt-16">
      <div className="mb-8 xl:mb-0 mt-6">
        <div className="flex items-center justify-center">
          <img className="w-[120px] h-[56px]" src="/avatar-group.png" alt="" />
        </div>
        <h2 className="text-2xl text-gray-800 text-center font-medium tracking-tight mb-4">
          Still have questions?
        </h2>
        <h3 className="text-xl text-gray-600 mb-8">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </h3>
      </div>
    </div>
  );
}

export default ContactUs;
