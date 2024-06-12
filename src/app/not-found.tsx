import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-axsoterBlue">4<Link href="https://www.youtube.com/watch?v=jeg_TJvkSjg">0</Link>4</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Täältäpä ei löytynytkään mitään.</p>
                    <p className="mb-4 text-lg font-light text-gray-400">Sivua mitä etsit ei löydy ainakaan täältä.</p>
                    <Link href="/" className="inline-flex text-white bg-axsoterBlue ease-in-out duration-700 hover:bg-brandGradient font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Takaisin kotisivuille</Link>
                </div>   
            </div>
        </section>
    )
}