import Layout from "@/components/custom/Layout";
import { Toaster } from "@/components/ui/sonner";
import { useAxios } from "@/lib/axios";
import { Outlet } from "react-router";

const RootLayout = () => {
  useAxios();
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <Toaster duration={3000} position="top-center" />
    </>
  );
};

export default RootLayout;
