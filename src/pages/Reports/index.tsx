import MainBanner from '../../components/reports/banner';
import RiskPreview from '../../components/reports/report-preview';
import RiskReport from '../../components/reports/risk-reports';

const Reports: React.FC<any> = () => {
  return (
    <div>
      <MainBanner />
      <div className="innerwrap">
        <RiskReport />
        <RiskPreview />
      </div>
    </div>
  );
};

export default Reports;
