import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/public/Header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
