import { Footer } from "@/components/common/Footer";
import { NavigationBar } from "@/components/common/NavigationBar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
