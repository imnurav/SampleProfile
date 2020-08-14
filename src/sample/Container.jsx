import React from "react";
const SampleImages = [
  "https://www.google.com/maps/vt/data=k-GVQ5Gp0Hy8N0qnreIJKLTCDnQGuvdQ4omD3hsOaCKAVV66El23btsbEbmeLj6aYaxmjKtutZ_4ohsAATAVY6XOh31iGVegdsN4SR3HfRzQmXXp1vD0nx9ZItGddt0owQTnEwPivvTatOsaxGcSahHIAgY",
  "https://lh3.googleusercontent.com/GZnp5-iyYaCcuFgcL-5rSONHB1m3IJZ_FVryc0wsFWpdF0jLJcCrFLf6tH5lftXALIQPmTG2Nuj8dQTPXRHIctkzhTNpm6S_aHh5yD9KMjFuDf2OoO-6czE9yGbQJft7jBocz2x_KYqSKa0D21VRsidpd5hpqBhIT8vdhVn3JGI7fRxWZ1rT5WWLNnsZ583Qb1Qc8SiFS4ndnNp6YViMq1lDZwx0H5h_2sCQmovFi9SPkYvdBjppsyX9r_TFdAKkE6LaLarU1vMkuYD3Jh0yOHLMnzyqHBj2JddR3muI5v9VePAcXFFjDW9P_faUc3hsyeaUmSMytzfFHpKi7mou6Yej76TJXXDb6f_etgtCfjpZvpAvaVTpefXXUCdxQ5M9uacblsANMbkeNRDRlkq5hTZZuJYE1FoPK0CcJMziGl8_3bmoIh-SuEgwSaxhyrpejWRmnpyRCHY5vwIT3d4uqiHzda135Ys9NAD5pIpA2lYVJr6o7fUUY8k2uA9VQrhJerecfiK2RJqVnekLDmXD41a-Ly-eYlQGrgaEaKx8Jyk0i4k-TvmXbpU0a3yrjJ3MrZJOBqn2SHLEop8OnkLxcg_1WlocOzhYR5XnBBT7v0a1-PFtqcTV7ebyL5sN1ssaleq2mGo9P3knKC5MHVjHx2udUnF3b1j3mO8YhX5YkEUI9g9rNc-WbyUKu5CZMQ=w136-h241-no?authuser=0",
  "https://cdn.pixabay.com/photo/2019/12/01/05/01/entrepreneur-4664726_960_720.jpg",
];
const Container = () => {
  return (
    <div>
      <h1 className="heading">
        Recents Tweets of the User About a Topic Goes below
      </h1>
      <div className="container">
        <img src={SampleImages[0]} alt="" width="150px" height="150px" />
        <p>Use our built-in widgets</p>
      </div>
      <div className="container">
        <img src={SampleImages[1]} alt="" width="150" height="150px" />
        <p>..upload your own images</p>
      </div>
      <div className="container">
        <img src={SampleImages[2]} alt="" width="150" height="150px" />
        <p>
          Copy&paste,undo&redo
          <br /> with familiar keyboard
          <br /> shorcuts
        </p>
      </div>
      <hr className="endline" />
    </div>
  );
};
export default Container;
