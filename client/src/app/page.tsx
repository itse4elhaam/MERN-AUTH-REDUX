import Image from 'next/image'
import NavMenu from "../components/NavMenu"

export default function Home() {
  return (
		<>
			<NavMenu />
			<h2 className="text-red-400">HELLO</h2>
		</>
  );
}
