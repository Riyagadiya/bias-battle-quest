
const BackgroundLayers = () => {
  return (
    <div className="absolute inset-0 bg-[#f9f9f9]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/151f7968-44c7-4234-837a-9cbded9c6f9e.png')",
        }}
      ></div>
      
      <div 
        className="absolute inset-0 bg-no-repeat bg-top z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/0e279057-67c4-4f2e-ba37-277f234ea783.png')",
          backgroundSize: "100% auto",
          filter: "grayscale(100%) opacity(0.6)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))"
        }}
      ></div>
    </div>
  );
};

export default BackgroundLayers;
