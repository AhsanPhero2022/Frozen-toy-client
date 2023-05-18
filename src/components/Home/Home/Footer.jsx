const Footer = () => {
  return (
    <footer className="bg-green-300 ">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            {/* Website Logo */}
            <img
              className="h-8 w-8 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHOjvEUOZhkkz6l_TQUUatrb7DatAQAbooPQbhEJc9Nsiv8XYCiWqD0FzDWqUMBjMLXE&usqp=CAU"
              alt="Logo"
            />

            {/* Website Name */}
            <span className=" text-lg font-bold ">Disney dolls</span>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            {/* Contact Information */}
            <h2 className=" text-lg font-semibold mb-2">Contact</h2>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            {/* Social Media Links */}
            <h2 className=" text-lg font-semibold mb-2">Social Media</h2>
            <ul>
              <li>
                <a className=" hover:text-white" href="https://example.com">
                  Facebook
                </a>
              </li>
              <li>
                <a className=" hover:text-white" href="https://example.com">
                  Twitter
                </a>
              </li>
              <li>
                <a className=" hover:text-white" href="https://example.com">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
            {/* Address */}
            <h2 className=" text-lg font-semibold mb-2">Address</h2>
            <p>123 Street, City, State, Country</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Disney dolls. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
