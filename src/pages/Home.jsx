import Filter from "../components/Filter";

function Home() {
  const filterOptions = [
    { name: "Date Of Registration", inputType: "dropdown" },
    { name: "Vendor Score", inputType: "dropdown" },
    { name: "Rating", inputType: "dropdown" },
    { name: "Status", inputType: "dropdown" },
    { name: "Type of business", inputType: "dropdown" },
    { name: "Location", inputType: "dropdown" },
    { name: "Assign to", inputType: "dropdown" },
  ];

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="container w-2/4 bg-slate-50 h-2/3">
        <Filter buttonName="Filters" filterOptions={filterOptions} />
      </div>
    </div>
  );
}

export default Home;

