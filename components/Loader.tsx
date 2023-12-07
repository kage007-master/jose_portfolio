export default function Loader() {
  return (
    <div className="w-20 h-20 relative loader">
      <span className="w-full h-full absolute top-0 left-0 rounded-full bg-primary origin-center scale-100"></span>
      <span className="w-full h-full absolute top-0 left-0 rounded-full bg-primary opacity-25 origin-center scale-0"></span>
    </div>
  );
}
