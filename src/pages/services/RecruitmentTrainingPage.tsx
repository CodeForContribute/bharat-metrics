import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ServiceDetail from "@/components/sections/services/ServiceDetail";
import { getServiceBySlug } from "@/data/services";

const RecruitmentTrainingPage = () => {
  const navigate = useNavigate();
  const service = getServiceBySlug("recruitment-training");

  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <Layout>
      <ServiceDetail service={service} />
    </Layout>
  );
};

export default RecruitmentTrainingPage;
