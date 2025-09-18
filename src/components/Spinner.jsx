import { ClipLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-full w-full my-20 text-blue-600 dark:text-pink-400">
      <ClipLoader
        size={50}
        color="currentColor" // uses Tailwind text color
        cssOverride={{ display: "block" }}
      />
    </div>
  );
}
