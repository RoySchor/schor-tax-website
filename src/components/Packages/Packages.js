import React from "react";
import "./Packages.module.css";
import ServicePackageCardTemplate from "./components/ServicePackageCardTemplate/ServicePackageCardTemplate";
import { TaxCompliance } from "./constants/TaxCompliance.constants";
import { Standard } from "./constants/Standard.constants";
import { Premier } from "./constants/Premier.constants";
import { Concierge } from "./constants/Concierge.constants";

const Packages = () => {
  return (
    <section id="packages" className="packagesSection">
      <div className="packagesSectionHeader">
        <h1 className="packagesSectionTitle">
          Service Packages
        </h1>
        <h2 className="packagesSectionSubheader">
          Taxes are the biggest expense you will incur in your lifetime. Do you really want to price shop your accountant?
        </h2>

        <p className="packagesSectionDescription">
          We offer a range of services from basic tax return preparation to white glove services designed for small business owners looking for a full service package.
          <br />
          <br />
          <em>All packages require consultation to determine fixed price agreement and custom quote.</em>
        </p>
      </div>

      <hr className="blueDivider" />

      <ServicePackageCardTemplate
        title={TaxCompliance.title}
        subTitleOne={TaxCompliance.subTitleOne}
        subTitleTwo={TaxCompliance.subTitleTwo}
        description={TaxCompliance.description}
        listHeader={TaxCompliance.listHeader}
        listElements={TaxCompliance.listElements}
      />

      <hr className="blueDivider" />


      <ServicePackageCardTemplate
        title={Standard.title}
        subTitleOne={Standard.subTitleOne}
        description={Standard.description}
        listHeader={Standard.listHeader}
        listElements={Standard.listElements}
      />

      <hr className="blueDivider" />

      <ServicePackageCardTemplate
        title={Premier.title}
        subTitleOne={Premier.subTitleOne}
        description={Premier.description}
        listHeader={Premier.listHeader}
        listElements={Premier.listElements}
      />

      <hr className="blueDivider" />

      <ServicePackageCardTemplate
        title={Concierge.title}
        subTitleOne={Concierge.subTitleOne}
        description={Concierge.description}
        listHeader={Concierge.listHeader}
        listElements={Concierge.listElements}
      />
    </section>
  );
};

export default Packages;
