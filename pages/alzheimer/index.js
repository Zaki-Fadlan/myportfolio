import React, { useState } from "react";
import Sample from "./Sample";

const Alzheimer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewSample, setViewSample] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleAnalyze = () => {
    if (selectedImage) {
      const img = new Image();

      img.src = selectedImage;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 128;
        canvas.height = 128;

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const resizedImage = canvas.toDataURL("image/jpeg");

        setSelectedImage(resizedImage);
      };
    }
  };

  return (
    <div className="justify-center mx-auto h-full bg-primary/30 py-32 p-2">
      <h1 className="h1 text-xl text-center">
        Alzheimer Disease Classification using MobileNetV3
      </h1>

      <div className="flex w-full items-center justify-center rounded-2xl">
        <form action="#" method="POST">
          <div className="bg-primary grid grid-cols-1 space-y-2">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col justify-center items-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="h-40 mx-auto mb-2"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  )}
                  <p className="pointer-none text-gray-500 ">
                    {selectedImage
                      ? ""
                      : "Select a .jpg file from your computer"}
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={handleAnalyze}
            className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Analyze
          </button>
          <div className="flex mx-auto justify-center">
            <button
              type="button"
              className="inline-block rounded-full bg-blue-500 hover:bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-toggle="modal"
              data-te-target="#exampleModalFullscreen"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => setViewSample(true)}
            >
              Image Sample
            </button>
          </div>
        </form>
      </div>
      {viewSample ? (
        <>
          <div className="justify-center items-center rounded-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg max-h-lg">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <Sample />
                </div>
                <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-red-700 shadow-xl text-white active:bg-red-600 font-bold uppercase text-sm p-2 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setViewSample(false)}
                  >
                    Close
                  </button>
                </div>
                <a
                  href="/alzheimer_sample/Dataset.zip"
                  className="text-slate-700 rounded-xl text-center underline"
                >
                  Download sample
                </a>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Alzheimer;
