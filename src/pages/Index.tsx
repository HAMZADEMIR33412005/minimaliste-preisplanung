import { motion } from "framer-motion";
import PricingTable from "@/components/PricingTable";
import OrderForm from "@/components/OrderForm";
import RequirementsList from "@/components/RequirementsList";
import LocationOptions from "@/components/LocationOptions";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <main className="w-full mx-auto">
        <PricingTable />
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <OrderForm />
        </div>
        <RequirementsList />
        <LocationOptions />
      </main>
    </motion.div>
  );
};

export default Index;