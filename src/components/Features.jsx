import Feature from "./Feature";
import banner1 from "../assets/feature-1.svg";
import banner2 from "../assets/banner-svg.svg";

const Features = () => {
  return (
    <div className="container mx-auto my-40 flex flex-col gap-40 px-6">
      <Feature
        reverse={false}
        imageLink={banner1}
        title={"Fresh Food Always  On Your Search"}
      >
        <>
          Choosing fresh, locally sourced food supports local farmers and the
          community. It helps strengthen the local economy and reduces the
          carbon footprint associated with transporting food long distances.
        </>
      </Feature>
      <Feature
        reverse={true}
        imageLink={banner2}
        title={"AnyTime, AnyThing You Want.  Just Search"}
      >
        <>
          Choosing fresh, locally sourced food supports local farmers and the
          community. It helps strengthen the local economy and reduces the
          carbon footprint associated with transporting food long distances.
        </>
      </Feature>
    </div>
  );
};

export default Features;
