import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/public/Header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
