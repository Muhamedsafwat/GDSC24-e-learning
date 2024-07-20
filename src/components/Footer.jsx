
const Footer = () => {
  return (
    <footer className="bg-brandBlue  pt-16  text-white">
      <div className=" flex px-16">
        <div>
          <h2 className="font-bold text-2xl mb-2">EDUFREE</h2>
          <p className="text-lg  font-light">
            Bangun dan wujudkan cita bersama edufree
          </p>
          <div className="bg-brandOrange rounded-t-lg flex gap-5 p-4 text-black mt-16">
            <div>
              <p className="font-semibold">Email</p>
              <p>contact@website.com</p>
            </div>
            <div>
              <p className="font-semibold">Telephone</p>
              <p>+6288 999 222 333</p>
            </div>
          </div>
        </div>
        <div className="flex ml-auto gap-20 ">
          <div>
            <h3 className="font-semibold text-xl mb-4">Social Media</h3>
            <ul className="space-y-2 text-lg font-light [&>_li:hover]:underline [&>_li]:cursor-pointer">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">Program</h3>
            <ul className="space-y-2 text-lg font-light [&>_li:hover]:underline [&>_li]:cursor-pointer">
              <li>Merdeka Belajar</li>
              <li>Finterpreneur</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-4">DUKUNGAN</h3>
            <ul className="space-y-2 text-lg font-light [&>_li:hover]:underline [&>_li]:cursor-pointer">
              <li>Tentang Kami</li>
              <li>Ketentuan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white text-black px-16 py-4">
        <p className=" text-lg font-bold">© Copyright EDUFREE 2021 - 2022</p>
        <div className="flex gap-5 font-semibold ">
          <p>HOME</p>
          <p>TENTANG KAMI</p>
          <p>KURSUS</p>
          <p>FAQ</p>
          <p>BLOG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
