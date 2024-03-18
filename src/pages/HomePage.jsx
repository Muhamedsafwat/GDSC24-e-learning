import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
//import images & icons
import heroImg from "../assets/hero-img.png";
import stats1 from "../assets/stats-1.png";
import stats2 from "../assets/stats-2.png";
import stats3 from "../assets/stats-3.png";
import stats4 from "../assets/stats-4.png";
import stats5 from "../assets/stats-5.png";
import aboutUs from "../assets/landingpage1.png";
import avatar from "../assets/testimonials1.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="container">
        <Stats />
        <Grid />
        <About />
        <Courses />
        <Testimonials />
        <FAQ />
        <LogIn />
        <Blog />
      </div>
      <Footer />
    </>
  );
};

//hero section
const HeroSection = () => {
  return (
    <section className="bg-brandBlue flex text-white h-[80vh] flex-col justify-center ">
      <div className="container flex pl-16">
        <div className="space-y-10 mt-10 w-1/2">
          <h2 className="text-5xl leading-normal font-bold">
            Bangun dan Wujudkan Cita Bersama EDUFREE
          </h2>
          <p>
            EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
            online yang bertujuan untuk membantu kamu meraih cita di bidang
            teknologi.
          </p>
          <div className="flex gap-5 text-center align-items-center ">
            <Link
              to="/logIn"
              className="bg-brandOrange border-2 border-brandOrange text-black hover:brightness-125 duration-150 px-5 py-3 rounded-md  font-bold text-xl"
            >
              Join Us
            </Link>
            <Link to="more-info" className="hover:underline ">
              More info
            </Link>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

//stats
const Stats = () => {
  const statsNumbers = [
    {
      number: "21.000+",
      text: "Students",
    },
    {
      number: "100+",
      text: "Instructors",
    },
    {
      number: "+150",
      text: "Courses",
    },
  ];

  const statsPartners = [
    {
      icon: stats1,
      text: "Lorem",
    },
    {
      icon: stats2,
      text: "Ditlance",
    },
    {
      icon: stats3,
      text: "owthest",
    },
    {
      icon: stats4,
      text: "neovasi",
    },
    {
      icon: stats5,
      text: "onago",
    },
  ];
  return (
    <section className="container flex bg-[#EEF4FA] py-14  justify-center gap-16">
      <div className="flex gap-5">
        {statsNumbers.map((item, index) => (
          <div key={index}>
            <p className="text-4xl font-bold">{item.number}</p>
            <p className="text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        {statsPartners.map((item, index) => (
          <div key={index} className="flex h-fit mt-auto">
            <img src={item.icon} className="text-2xl font-bold" />
            <p className="text-2xl font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

//grid
const Grid = () => {
  const gridItems = [
    {
      title: "Kursus Gratis",
      text: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
    },
    {
      title: "Akses Selamanya",
      text: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
    },
    {
      title: "Grup Konsultasi",
      text: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
    },
    {
      title: "Sertifikat dan Portofolio",
      text: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
    },
    {
      title: "Belajar Lebih Terarah",
      text: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
    },
    {
      title: "Instruktur Berpengalaman",
      text: "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
    },
  ];
  return (
    <section className="flex flex-col items-center pt-24 pb-12 ">
      <h2 className="text-4xl font-semibold max-w-xl text-center">
        Keuntungan Bergabung Dengan <br /> E-Learning EDUFREE
      </h2>
      <div className="flex flex-wrap justify-evenly mt-16">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F6FC] shadow-md p-5 min-w-36 max-w-96 mb-10 rounded-lg cursor-pointer hover:translate-y-[-8px] duration-150"
          >
            <div className="bg-blue-700 font-bold flex w-min relative text-white px-3 py-2 rounded-md">
              <div className="bg-brandOrange w-2 h-5 absolute left-0 bottom-0 rounded-sm" />{" "}
              {index + 1}
            </div>
            <h3 className="mt-4 font-medium text-xl mb-2">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

//section
const About = () => {
  return (
    <section className="flex items-center justify-between px-16 pb-20">
      <div className="w-1/2">
        <h2 className="mb-3 text-xl">Tentang Kami</h2>
        <p className="font-bold text-5xl mb-5">
          EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
        </p>
        <p className="text-lg font-light text-gray-600">
          Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi
          kedepanya dalam bidang pendidikan
        </p>
      </div>
      <div className="h-92">
        <img src={aboutUs} alt="about us" className="h-full object-fit" />
      </div>
    </section>
  );
};

//testimonials
const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      text: "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta  responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!",
      author: "Muhamed Safwat",
      title: "CEO",
      profilePic: avatar,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur temporibus quam quod a at repellendus alias veniam beatae eveniet voluptatibus quisquam tempora architecto, dolorum itaque corporis maxime, tempore officia velit.",
      author: "Karam",
      title: "Vice President",
      profilePic: avatar,
    },
    {
      text: "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta  responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!",
      author: "lamia",
      title: "Core-Team",
      profilePic: avatar,
    },
    {
      text: "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta  responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!",
      author: "Ayman Ezz",
      title: "Frontend lead",
      profilePic: avatar,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur temporibus quam quod a at repellendus alias veniam beatae eveniet voluptatibus quisquam tempora architecto, dolorum itaque corporis maxime, tempore officia velit.",
      author: "Orabi",
      title: "President",
      profilePic: avatar,
    },
    
  ];

  return (
    <section className="bg-[#EEF4FA] px-16 py-16 gap-16 flex">
      <div>
        <h2 className="font-bold text-3xl">
          Kata Mereka Tentang <br /> Kursus EDUFREE
        </h2>
        <p className="font-light mt-2">
          EDUFREE telah dipercaya lebih dari 10.000 siswa
        </p>
      </div>
      <div className="w-2/3 ml-auto">
        <p className="text-2xl font-medium h-24">"{tabs[activeTab].text}"</p>
        <div className="flex">
          <div className="flex mt-10 gap-2">
            <img
              className="rounded-full border-2 shadow-md border-white"
              src={tabs[activeTab].profilePic}
              alt="profile picture"
            />
            <div>
              <p className="font-medium text-lg hover:underline cursor-pointer">
                {tabs[activeTab].author}
              </p>
              <p className="text-sm ">{tabs[activeTab].title}</p>
            </div>
          </div>
          <div className="mt-auto ml-auto mr-16 mb-3 flex gap-3">
            {tabs.map((item, index) => (
              <div
                key={index}
                className={`size-3 rounded-full cursor-pointer hover:bg-blue-600 duration-200 ${
                  activeTab == index ? "bg-blue-600 scale-x-110" : "bg-blue-300"
                }`}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

//frequently asked questions
const FAQ = () => {
  const [activeTab, setActiveTab] = useState(null);
  const tabs = [
    {
      question: "Apakah kursus ini benar-benar gratis?",
      answer:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      question: "Untuk siapa kursus ini?",
      answer:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      question: "Apakah kursus ini bersertifikat?",
      answer:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      question: "Sampai kapan kursus ini berakhir?",
      answer:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      question: "Apakah ada penyaluran kerja setelah lulus?",
      answer:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
  ];

  const clickHandler = (index) => {
    setActiveTab(activeTab == index ? null : index);
  };

  return (
    <section id="faq" className="px-16 flex py-16">
      <div>
        <h2 className="font-semibold text-4xl mb-4">
          Frequently Asked <br /> Questions
        </h2>
        <p>
          Masih bingung atau ragu? Hubungi kami <br /> di nomor +6288 999 222
          333
        </p>
      </div>
      <div className="w-[60%] ml-auto ">
        {tabs.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-10 py-4 border-b-2 border-b-gray-200 last:border-b-0"
          >
            <div className="text-blue-600 font-semibold text-2xl">
              0{index + 1}
            </div>
            <div>
              <h3
                onClick={() => clickHandler(index)}
                className="font-semibold text-2xl cursor-pointer"
              >
                {item.question}
              </h3>
              <div
                className={`mt-2 text-xl font-light overflow-hidden duration-150 ${
                  activeTab == index ? "h-16" : "h-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
            <div
              className={` text-3xl font-light ml-auto duration-150 cursor-pointer ${
                activeTab == index && "rotate-45"
              }`}
              onClick={() => clickHandler(index)}
            >
              +
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//Blog section
const Blog = () => {
  const blogs = [
    {
      image: blog1,
      date: "19 Jan 2022",
      title: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE ",
      desc: "Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ...",
    },
    {
      image: blog2,
      date: "19 Jan 2022",
      title: "Tips Membuat Website Landing Page Bussines - EDUFREE",
      desc: "Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ...",
    },
    {
      image: blog1,
      date: "19 Jan 2022",
      title: "Cara Installasi Wordpress Untuk Pemula -EDUFREE",
      desc: "Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ...",
    },
  ];
  return (
    <section className="px-16 my-16">
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl">Blog, Berita dan Event</h2>
        <p className="group cursor-pointer relative pr-4 text-gray-600">
          Lihat Semua
          <span className="group-hover:translate-x-2 absolute right-0 duration-100">
            &gt;
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly mt-16">
        {blogs.map((item, index) => (
          <div
            key={index}
            className=" min-w-72 max-w-96 mb-10 rounded-lg cursor-pointer hover:translate-y-[-8px] duration-150"
          >
            <div className="h-56 overflow-hidden">
              <img src={item.image} alt="cover" />
            </div>
            <div className="space-y-3 mt-4">
              <p>{item.date}</p>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p>{item.desc}</p>
              <p className="group cursor-pointer relative pr-4 w-fit text-gray-600">
                Lihat Semua
                <span className="group-hover:translate-x-2 absolute right-0 duration-100">
                  &gt;
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//register
const LogIn = () => {
  return (
    <>
      <div className="LogIn container px-16">
        <Link className="home text-2xl text-white" to="/">
          {" "}
          &#8592; Home Page{" "}
        </Link>
        <div id="login-page">
          <div className="background">
            <h1>Online Learning Mangement System</h1>
          </div>
          <div className="login w-50">
            <h2 className="login-title text-4xl mb-4 pr-10 ">Register</h2>
            <p className="notice text-xl text-white-50 mb-6">
              Create a new account and join us
            </p>
            <form className="form-login">
              <div className="input-email">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail"
                  className=" p-2 rounded-md fs-5 "
                  required
                />
              </div>
              <div className="input-password">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className=" p-2 rounded-md fs-5"
                  required
                />
              </div>
              <div className="checkbox">
                <input type="checkbox" id="remember" className=" ml-3 " />
                <label
                  htmlFor="remember"
                  className="fs-4 ml-2 pl-3 text-white-50"
                >
                  Remember me
                </label>
              </div>
              <Link to="/" className="signIn mb-3 fs-4 rounded-md mt-4 ">
                Register
              </Link>
            </form>
            <div className="register text-center">
              <p className=" text-xl text-white">
                Already have an account ?
                <Link
                  to="/register"
                  className=" underline text-xl ml-2 hover:text-[#FCD980]"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//Courses
const Courses = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch(`http://localhost:3000/products/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 3));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="px-16 py-20 ">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl">
          Rekomendasi Kursus <br /> Untuk Kamu
        </h2>
        <Link
          to="/product"
          className="bg-brandOrange border-2 border-brandOrange text-black hover:brightness-125 duration-150 px-5 py-3 rounded-md  font-bold text-xl"
        >
          All courses
        </Link>
      </div>
      <div className="row">
        {data?.map((data) => (
          <div className="col-md-4 my-4" key={data?.id}>
            <Link to={`/product/${data?.id}`} className=" link">
              <img
                src={data?.image}
                alt="img1"
                height={300}
                className="w-100"
              />
              <div className="text d-flex justify-content-between ">
                <h2 className="h5 my-3 fw-bold">{data?.title}</h2>
                <div className="rate d-flex justify-content-center align-item-center">
                  <span className="">
                    <i
                      className="fa-solid fa-star fa-sm  "
                      style={{ color: "#FFD43B" }}
                    ></i>
                  </span>
                  <p className="">{data?.rating?.rate}</p>
                </div>
              </div>
              <p className="dec">{data?.description}</p>
              <div className="d-flex justify-content-around ">
                <div className="clock icon">
                  <span>
                    <i className="fa-regular fa-clock mx-1"></i>
                    {data?.date}
                  </span>
                </div>
                <div className="video icon">
                  <span>
                    <i className="fa-regular fa-circle-play mx-1"></i>
                    {data?.rating?.count}
                  </span>
                </div>
                <div className="view icon">
                  <span>
                    <i className="fa-regular fa-user mx-1"></i>
                    {data?.people}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
