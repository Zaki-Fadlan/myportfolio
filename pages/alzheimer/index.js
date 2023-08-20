import React from "react";

const Alzheimer = () => {
  return (
    <div className="justify-center mx-auto h-full bg-primary/30 py-32 p-2">
      <div className="text-center mb-3">
        <h1 className="font-bold text-lg">
          Alzheimer Disease Classification using MobileNetV3
        </h1>
      </div>
      <div className=" flex h-4/5 w-full items-center justify-center rounded-2xl">
        <form class="space-y-3" action="#" method="POST">
          <div class="bg-primary grid grid-cols-1 space-y-2">
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div class="h-full w-full text-center flex flex-col justify-center items-center  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p class="pointer-none text-gray-500 ">
                    select a file from your computer
                  </p>
                </div>
                <input type="file" class="hidden" />
              </label>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            <span>File type: doc,pdf,types of images</span>
          </p>
          <div>
            <button
              type="submit"
              class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Analyze
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Alzheimer;
