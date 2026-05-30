const LoadingSke = () => {
  return (
    <div className="w-full  justify-center items-center mt-10 flex">
      <div className="w-full items-center flex flex-col justify-center   ">
        <span className="loader-circle mb-2"></span>
        <div className="max-sm:text-sm text-primary font-semibold">
          در حال بارگذاری اطلاعات
        </div>
        <div className="text-sm">لطفاً کمی صبر کنید</div>
      </div>
    </div>
  );
};

export default LoadingSke;
