import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-4 sticky top-[100vh] w-full drop-shadow-xl z-50">
        <div className="flex justify-center text-center ">
            <h4 className="text-xs  text-white/90 grid mb-2 md:mb-0">

              <p>Website created with ❤️ by <Link href="/" className="text-white/90 no-underline hover:text-white">Luys Fernnando</Link></p>
              <p>Developed using NextJs and Tailwind CSS</p>
              <p>© Copyright Luys Fernnando 2023 | All rights reserved</p>
            </h4>
        </div>
    </footer>
  )
}
