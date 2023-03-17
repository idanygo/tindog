export const randomPlace = () => {
  const arrOfPlaces = [
    "Sweden",
    "China",
    "Kazakhstan",
    "Italy",
    "United States",
    "Italy",
    "France",
    "Germany",
    "Mexico",
    "Tunisia",
    "Germany",
    "Spain",
    "Swaziland",
    "Indonesia",
    "China",
    "United Kingdom",
  ];
  const index = Math.floor(Math.random() * arrOfPlaces.length);
  return arrOfPlaces[index];
};
