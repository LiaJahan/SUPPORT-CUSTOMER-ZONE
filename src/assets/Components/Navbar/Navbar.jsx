const Navbar = () => {
  return (
    <div className='mx-auto max-w-full px-4 sm:px-20 py-6 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between'>
      <div className='mb-4 sm:mb-0'>
        <h3 className='text-5xl font-bold'>CS — Ticket System</h3>
      </div>
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full sm:w-auto'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 text-2xl'>
          <h4>Home</h4>
          <h4>FAQ</h4>
          <h4>Changelog</h4>
          <h4>Blog</h4>
          <h4>Download</h4>
          <h4>Contact</h4>
        </div>
        <button
          className="btn text-2xl text-white px-8 py-4 sm:py-7 rounded-l flex items-center gap-2 mt-4 sm:mt-0"
          style={{
            background:
              "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
          }}
        >
          <img className='h-8 w-8' src="https://i.ibb.co/q3fh3wQH/ic-outline-plus.png" alt="" />
          New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
