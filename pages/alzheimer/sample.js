import React from "react";
const imgesample = [
  {
    name: "Moderate Demented",
    path: [
      "./alzheimer_sample/Dataset/Moderate_Demented/moderate_2.jpg",
      "./alzheimer_sample/Dataset/Moderate_Demented/moderate_3.jpg",
      "./alzheimer_sample/Dataset/Moderate_Demented/moderate_4.jpg",
      "./alzheimer_sample/Dataset/Moderate_Demented/moderate_5.jpg",
      "./alzheimer_sample/Dataset/Moderate_Demented/moderate.jpg",
    ],
  },
  {
    name: "Mild Demented",
    path: [
      "./alzheimer_sample/Dataset/Mild_Demented/mild_2.jpg",
      "./alzheimer_sample/Dataset/Mild_Demented/mild_3.jpg",
      "./alzheimer_sample/Dataset/Mild_Demented/mild_4.jpg",
      "./alzheimer_sample/Dataset/Mild_Demented/mild_5.jpg",
      "./alzheimer_sample/Dataset/Mild_Demented/mild.jpg",
    ],
  },
  {
    name: "Non Demented",
    path: [
      "./alzheimer_sample/Dataset/Non_Demented/non_2.jpg",
      "./alzheimer_sample/Dataset/Non_Demented/non_3.jpg",
      "./alzheimer_sample/Dataset/Non_Demented/non_4.jpg",
      "./alzheimer_sample/Dataset/Non_Demented/non_5.jpg",
      "./alzheimer_sample/Dataset/Non_Demented/non.jpg",
    ],
  },
  {
    name: "Very Mild Demented",
    path: [
      "./alzheimer_sample/Dataset/Very_Mild_Demented/verymild_2.jpg",
      "./alzheimer_sample/Dataset/Very_Mild_Demented/verymild_3.jpg",
      "./alzheimer_sample/Dataset/Very_Mild_Demented/verymild_4.jpg",
      "./alzheimer_sample/Dataset/Very_Mild_Demented/verymild_5.jpg",
      "./alzheimer_sample/Dataset/Very_Mild_Demented/verymild.jpg",
    ],
  },
];
const Sample = () => {
  return (
    <div className="grid">
      {imgesample.map((category, index) => (
        <div key={index}>
          <h2 className="text-slate-800 mb-1 font-semibold text-center">
            {category.name}
          </h2>
          <ul className="flex flex-wrap mb-2">
            {category.path.map((path, pathIndex) => (
              <li key={pathIndex} className="md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                <img
                  src={path}
                  className="w-full h-auto object-contain"
                  alt={`Image ${pathIndex}`}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sample;
