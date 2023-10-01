import Feature from "./Feature";

const Features = () => {
  return (
    <div className="container mx-auto my-40 flex flex-col gap-40">
      <Feature reverse={false} imageLink={'/src/assets/feature-1.svg'} title={'Fresh Food Always  On Your Reach'} >
        <p>
          Choosing fresh, locally sourced food supports local farmers and the
          community. It helps strengthen the local economy and reduces the
          carbon footprint associated with transporting food long distances.
        </p>
      </Feature>
      <Feature reverse={true} imageLink={'/src/assets/feature-2.svg'} title={'AnyTime, AnyThing, You Want'} >
        <p>
          Choosing fresh, locally sourced food supports local farmers and the
          community. It helps strengthen the local economy and reduces the
          carbon footprint associated with transporting food long distances.
        </p>
      </Feature>
    </div>
  );
};

export default Features;
