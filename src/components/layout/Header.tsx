import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useFormModalStore } from "@/stores/formModalStore";

const Header = () => {
  const openCreateModal = useFormModalStore(
    (state) => state.openCreateModal
  );

  return (
    <header className="max-w-screen-2xl m-auto">
      <div
        className="
          mb-6
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
          mt-2
          px-4
          md:px-7
          border-b
          border-b-border
          p-4
        "
      >
      
        <div className="text-center md:text-right">
          <h1 className="text-lg md:text-xl font-bold text-text">
            مدیریت تعمیرات
          </h1>

          <p className="mt-1 text-sm text-text-secondary">
            ثبت درخواست‌های تعمیر موبایل
          </p>
        </div>

  
        <Button
          variant="outlined"
          color="blue"
          type="text"
          icon={<PlusOutlined />}
          onClick={openCreateModal}
          className="
            md:h-11!
            rounded-xl!
            px-5 md:px-5!
            w-full md:w-auto
          "
        >
          ثبت خرابی جدید
        </Button>
      </div>
    </header>
  );
};

export default Header;