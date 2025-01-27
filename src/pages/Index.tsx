import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PricingTable from "@/components/PricingTable";
import OrderForm from "@/components/OrderForm";
import RequirementsList from "@/components/RequirementsList";
import LocationOptions from "@/components/LocationOptions";
import Summary from "@/components/Summary";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [packagePrice, setPackagePrice] = useState(0);
  const [selectedPages, setSelectedPages] = useState(1);
  const [pagesPrice, setPagesPrice] = useState(600);
  const [extras, setExtras] = useState<string[]>([]);
  const [extrasTotal, setExtrasTotal] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [locationInitialPrice, setLocationInitialPrice] = useState(0);
  const [locationYearlyPrice, setLocationYearlyPrice] = useState(0);

  const handlePackageSelect = (name: string, price: number) => {
    setSelectedPackage(name);
    setPackagePrice(price);
  };

  const handleLocationSelect = (city: string, initialPrice: number, yearlyPrice: number) => {
    setSelectedLocation(city);
    setLocationInitialPrice(initialPrice);
    setLocationYearlyPrice(yearlyPrice);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <PricingTable 
          onSelectPackage={handlePackageSelect}
          selectedPackage={selectedPackage}
        />
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <OrderForm 
            selectedPackage={selectedPackage}
            packagePrice={packagePrice}
          />
        </div>
        <RequirementsList />
        <LocationOptions 
          onSelectLocation={handleLocationSelect}
          selectedLocation={selectedLocation}
        />
        <Summary
          selectedPackage={selectedPackage}
          packagePrice={packagePrice}
          selectedPages={selectedPages}
          pagesPrice={pagesPrice}
          extras={extras}
          extrasTotal={extrasTotal}
          selectedLocation={selectedLocation}
          locationInitialPrice={locationInitialPrice}
          locationYearlyPrice={locationYearlyPrice}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;