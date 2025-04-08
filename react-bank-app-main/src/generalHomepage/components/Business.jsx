import { FaStar } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiBanknote } from "react-icons/gi";
import CommonButton from "./CommonButton";
import CommonTitle from "./CommonTitle";
import '../generalHomepage.css';
import { useNavigate } from 'react-router-dom';

const BusinessCard = (props) => {
  const { icon, title, desc } = props;
  return (
    <div className="flex items-center gap-2 ss:p-7 ss:gap-5 p-3 sm:p-5 feature-card rounded-2xl ss:rounded-3xl hover:bg-black-gradient cursor-pointer">
      <div className="p-4 bg-dimBlue rounded-full">
        <span className="text-2xl ss:text-[2rem] text-secondary">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-base sm:text-lg font-semibold">
          {title}
        </h3>
        <p className="text-dimWhite text-xs sm:text-base">{desc}</p>
      </div>
    </div>
  );
};

const Business = () => {
  const navigate = useNavigate();

  const handleInfluencerClick = () => {
    navigate('/influencer-signin');
  };

  const handleBrandClick = () => {
    navigate('/brand-signin');
  };

  return (
    <section id="features" className="font-poppins pb-10 md:py-16">
      <div className="flex items-center flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
        <div className="flex flex-col gap-8 ss:gap-12 flex-1">
          <CommonTitle title="You want to reach out to influencers? " />
          <p className="text-dimWhite text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ad harum atque hic, repellat impedit reprehenderit, molestias veritatis quo cum, odit fuga mollitia voluptates dolores! Reiciendis corporis consequuntur neque veniam!
          </p>
          
          {/* Buttons placed horizontally in a flex row container */}
          <div className="flex flex-row gap-4">
            <CommonButton btnText="as Influencer" onClick={handleInfluencerClick} />
            <CommonButton btnText="as Brand" onClick={handleBrandClick} />
          </div>
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <BusinessCard
            icon={<FaStar />}
            title="Rewards"
            desc="The best credit cards offer some tantalizing combinations of promotions and prizes"
          />
          <BusinessCard
            icon={<MdOutlineSecurity />}
            title="100% Secured"
            desc="We take proactive steps make sure your information and transactions are secure."
          />
          <BusinessCard
            icon={<GiBanknote />}
            title="Balance Transfer"
            desc="A balance transfer credit card can save you a lot of money in interest charges."
          />
        </div>
      </div>
    </section>
  );
};

export default Business;