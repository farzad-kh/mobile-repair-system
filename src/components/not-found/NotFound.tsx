

import notFoundIcon from "/public/undraw_page-not.svg";
import noDataIcon from "/public/undraw_no-data.svg";

type NotFoundPropertyProps = {
  title?: string;
  label: string;
  mode: "filter" | "empty"
};

const NotFoundProperty = ({
  title = "موردی پیدا نشد",
  label,
  mode
}: NotFoundPropertyProps) => {
  return (
    <div className="w-full py-10">
      <div className="flex max-md:flex-col-reverse items-center justify-center gap-8">

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold max-md:text-center">
            {title}
          </h2>

          <p className="text-gray-500 max-md:text-center">
            {label}
          </p>
        </div>

        <img
          src={mode === "filter" ? notFoundIcon : noDataIcon}
          width={280}
          height={280}
          alt={mode === "filter" ? "404" : "data not found"}

        />
      </div>
    </div>
  );
};

export default NotFoundProperty;