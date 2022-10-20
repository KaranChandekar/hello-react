import React from "react";

const Employee = (props) => {
  return (
    <div class="py-8 px-8 max-w-sm m-4 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        class="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Man's Face"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">{props.name}</p>
          <p class="text-slate-500 font-medium">{props.role}</p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
};

export default Employee;
