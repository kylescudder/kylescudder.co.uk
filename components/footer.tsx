export default function Footer() {
	const currentDate = new Date();
	
	return (
    <footer className="bg-gradient-to-l from-seance-600 to-blue-500 text-white text-center p-4">
      &copy; {currentDate.getFullYear()} Kyle Scudder
    </footer>
  );
}